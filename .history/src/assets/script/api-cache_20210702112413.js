/*
* auther:peam
* time: 2020/1/8
* desc: 缓存API，一些不需要依赖用户信息的接口数据，做缓存处理，目前缓存时间写成固定，如果后面有需求，也可以改成动态的
*/
import Vue from 'vue';
import lruCache from 'lru-cache';
import $axios from 'axios';
import api from './api';
import { getSessionStorage, setSessionStorage } from './utils';
import store from '../../store'

console.log(store.state.signinInfos.token)

// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(store.state.signinInfos.token){
    config.headers.common['web_token']
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

$axios.interceptors.response.use(response=>{
 
  return response.data
},(error)=>{
  return Promise.reject(error)
})

const lang = 'zh'  ;

const cacheObj = new lruCache({
  max: 10000, // 缓存队列长度
  maxAge: 1000 * 60 * 30, // 缓存时间,缓存30分钟
});

// 获取本地缓存，分lru-cache缓存与会话缓存
const getLocalCache = (key, type) => {
  let data = null;
  if (type === 1 && process.client && window.sessionStorage && getSessionStorage(key)?.lang === lang) {
    data = getSessionStorage(key).data;
  } else if (cacheObj.has(key) && type === 2) {
   data = cacheObj.get(key)

  }
  return data;
};

// 存储本地缓存,其中参数type 1代表存入会话缓存中，其它使用lru-cache
const setLocalCahce = (key, data = {}, type) => {
  if (type === 1 && process.client && window.sessionStorage) {
    setSessionStorage(key);
  } else if (type===2) {
    cacheObj.set(key,data);
  }
};

// 需要缓存的api，config是配置缓存的信息，params是接口参数
const apiCache = async (config, params={}) => {
  params.lang = params.lang || app.$lang
  // 取缓存返回的数据结构
  const cacheData = {
    code: 0,
    msg: 'success',
    data: null,
  };
  const key = config.key;
  const cacheType = config.type;
  
  const keyto = key + JSON.stringify(params)

  if (!key) {
    cacheData.code = 129800;
    cacheData.msg = '缺少必要参数';
    return Promise.resolve(cacheData);
  }
  const caches = getLocalCache(keyto.toUpperCase(), cacheType);
  if (caches && caches !== {}) {
    cacheData.data = caches;
    return Promise.resolve(cacheData);
  }
  const result = await api($axios)[config.api || key](params);

  if (result?.data?.code === 0  ) {
    setLocalCahce(keyto.toUpperCase(), result?.data || {}, cacheType);
  }
  return result;
};
export {
  api as $api,
  apiCache as $apiCache,
};
export default apiCache;
