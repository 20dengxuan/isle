/*
  author:peam
  time:2019/12/17
  desc:封装了一下公用方法
*/
// 设置cookie 使用方法：setCookie('user', 'simon', 11)
const setCookie = (name, value, day = 7, domain, path) => {
  const date = new Date();
  date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
  const defaultDomain = process.env.NODE_ENV === 'development' || window.location.host.includes('3-e.cn') ? '.3-e.cn' : '.isle.org.cn';
  document.cookie = `${name}=${value};expires=${date.toGMTString()};domain=${domain || defaultDomain};path=${path || '/'}`;
};

// 获取cookie 使用方法：getCookie('user')
const getCookie = (name) => {
  const arr = document.cookie.split(';');

  for (let i = 0, len = arr.length; i < len; i++) {
    const arr2 = arr[i].split('=');
    if (arr2[0].trim() === name) {
      return arr2[1]; // 就返回属性名对应的值
    }
  }
  return ''; // 没找到就返回空
};

// 删除cookie 使用方法：removeCookie('user')
const deleteCookie = (name, domain, path) => {
  setCookie(name, 1, -1, domain, path); // -1就是告诉系统已经过期，系统就会立刻去删除cookie
};

// expire过期时间毫秒级
const setLocalStorage = (name, value, expire) => {
  const obj = { value, expire: null };
  if (Number(expire)) {
    obj.expire = Date.now() + Number(expire);
  }
  window.localStorage.setItem(`isle-${name}`, JSON.stringify(obj));
};

// 获取localStorage
const getLocalStorage = (name) => {
  const result = window.localStorage.getItem(name) || '';
  if (result) {
    window.localStorage.removeItem(name);
  }
  const data = window.localStorage.getItem(`isle-${name}`);
  if (data) {
    const dataParse = JSON.parse(data);
    if (dataParse.expire && Date.now() > dataParse.expire) {
      deleteLocalStorage(name);
      return undefined;
    }
    return dataParse.value;
  }
  return undefined;
};

// 删除localStorage
const deleteLocalStorage = (name) => {
  window.localStorage.removeItem(name);
  window.localStorage.removeItem(`isle-${name}`);
};

// 存储sessionStorage,
const setSessionStorage = (name, obj) => {
  const type = obj.toString() === '[object Object]';
  window.sessionStorage.setItem(name, type ? JSON.stringify(obj) : obj);
};

// 获取sessionStorage
const getSessionStorage = (name) => {
  const result = window.sessionStorage.getItem(name) || '';
  try {
    return JSON.parse(result);
  } catch (err) {
    return result;
  }
};

// 删除sessionStorage
const deleteSessionStorage = (name) => {
  window.sessionStorage.removeItem(name);
};

// 将小于10的数字前面加0
const preAddZero = (num) => (num < 10 ? `0${num}` : num);

// 删除图片资源协议头
const delProtocolHeader = (url) => {
  if (!url || typeof url !== 'string' || !url.replace) return url || '';
  return url.replace(/(https:)(\/\/)/g, '$2') || '';
};

// 当前状态修改为登录态
const statusToSignIn = (store) => {
  if (!process.client) return;
  // 获取登录状态
  const signInInfos = getLocalStorage('SIGNININFOS');
  if (signInInfos) {
    // 是否在2天有效期内
    const isValid = new Date().getTime() - signInInfos.stps < 2 * 24 * 60 * 60 * 1000;
    if (!isValid) return store.commit('signIned/DEL_SIGNIN');
    // 设置登录态
    store.commit('signIned/SET_SIGNIN', signInInfos);
  }
};

// 是否是移动端
const isMobile = () => /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

export {
  setCookie,
  getCookie,
  deleteCookie,
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
  setSessionStorage,
  getSessionStorage,
  deleteSessionStorage,
  preAddZero,
  delProtocolHeader,
  statusToSignIn,
  isMobile,
};
