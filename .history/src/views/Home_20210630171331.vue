<template>
  <div>
    <van-img
      :src="lang==='zh'?'//image-dev.3-e.cn/editor/935b7ffce5b142a7beed8713c6b41682.png':'//image-dev.3-e.cn/editor/e4b83caeac414ec7b0ae21885a794bd6.png'"
      height="11.5rem"
      width="100%"
    />
    <div class="center">
      <div class="register">
        <span
          ><van-icon size="0.75rem" name="friends" /> {{$t('menu.audienceR')}}
          <van-icon name="arrow"
        /></span>
        <span
          ><van-icon size="0.75rem" name="manager" /> {{$t('menu.exhibitorR')}}
          <van-icon name="arrow"
        /></span>
      </div>

      <div class="showroom">
        <van-img
          src="//image-dev.3-e.cn/editor/7fdb572fa6b34ab1a84bafe331e8f452.png"
          height="4rem"
          width="100%"
        />
        <span>{{$t('banner.showroom1')}}</span>
      </div>

      <div class="topisle">
        <top-title>
          {{$t('banner.data1')}}<br />
          {{$t('banner.data2')}}
        </top-title>

        <div>
          <div>
            <div>
              <h3>80,000m²</h3>
              <p>{{$t('banner.txt1')}}</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>{{$t('banner.txt2')}}</p>
            </div>
          </div>
          <div>
            <div>
              <h3>300,000+</h3>
              <p>{{$t('banner.txt3')}}</p>
            </div>
            <div>
              <h3>2,000+</h3>
              <p>{{$t('banner.txt4')}}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="room">
        <top-title> {{$t('title.area')}} </top-title>
        <div>
          <div @click="toExhibits(c.id)" v-for="(c, index) in state.card" :key="index">
            <van-img
              height="6.25rem"
              width="10.8125rem"
              radius="0.3125rem"
              :src="`https://image-dev.3-e.cn/${c.image}`"
            />
            <span>{{ c.name }}</span>
          </div>
        </div>
      </div>


      <div class="news">
         <top-title>{{$t('menu.news')}}</top-title>
         <van-config-provider :theme-vars="themeVars">
            <van-tabs animated swipeable v-model:active="active">
              <van-tab v-for="(s,index) in state.data" :key='index' :title="s.title">
                <h3>{{s.title}}</h3>
                <p @click="toNewdetail(d.id)" class="tabs van-ellipsis" v-for="(d,index) in s.data" :key="index">              
                  <van-icon color="yellow" name="play" /> {{d.title}}
                </p>
              </van-tab>
            
            </van-tabs> 
         </van-config-provider>
      </div>

    



    </div>
  </div>
</template>

<script>
import { $apiCache } from "../assets/script/api-cache";
import { useStore } from "vuex";
import {useRouter} from 'vue-router'
import TopTitle from "../components/Toptitle";
import { ref, reactive, onMounted, watch ,computed} from "vue"; 
import i18n from '../assets/script/i18n'
export default {
  components: {
    TopTitle,
  },
  setup() {
    const active = ref(0)
    const store = useStore()
    const lang = computed(()=>store.state.lang)
    console.log(i18n.global)
    const state = reactive({
      card: [],
      data:[
         {title:'展会新闻',dada:[]},
         {title:'展会推广',dada:[]},
         {title:'企业动态',dada:[]},
         {title:'行业动态',dada:[]}
     ]
    });

    


    // 监听
    watch(
      () => store.state.lang,
      (newVal) => {
        getExhibitCategorylist(newVal);
        getNewsList(newVal)
        getSpreadList(newVal)
        getEnterpriseList(newVal)
        getIndustryiseList(newVal)
      }
    );

    //展品展区
    const getExhibitCategorylist = (lang) => {
     $apiCache({ key: "getExhibitCategorylist",type:2 }, { lang: lang }).then(
        (res) => {
          state.card = res.data;
        }
      );
    };
    const router = useRouter()
    const toExhibits = (id) =>{
      router.push({name:'exhibits',query:{id}})
    }

    //展会新闻
    const getNewsList = (lang)=>{
      $apiCache({key:'getNewsList',type:2},{lang:lang,page:1,page_size:12}).then(res=>{
        console.log(res)
        state.data[0].data =  res.data.data
      })
    }
    const toNewdetail =(id)=>{
      router.push({name:'detail/news',query:{id}})
    }
    //展会推广
    const getSpreadList = (lang)=>{
      $apiCache({key:'getSpreadList',type:2},{lang:lang,page:1,page_size:12}).then(res=>{
          state.data[1].data = res.data.data
      })
    }

    //企业动态
    const getEnterpriseList = (lang)=>{
      $apiCache({key:'getEnterpriseList',type:2},{lang:lang,page:1,page_size:12}).then(res=>{
         state.data[2].data = res.data.data
      })
    }

    //行业动态
    const getIndustryiseList = (lang)=>{
      $apiCache({key:'getIndustryiseList',type:2},{lang:lang,page:1,page_size:12}).then(res=>{
          state.data[3].data = res.data.data
      })
    }

    onMounted(() => {
      getExhibitCategorylist(store.state.lang);
      getNewsList(store.state.lang)
      getSpreadList(store.state.lang)
      getEnterpriseList(store.state.lang)
      getIndustryiseList(store.state.lang)
    });














    const themeVars={
        TabsLineHeight: '2.75rem',
        TabLineHeight: '2.75rem'
    }


    return {
      state,
      active,
      themeVars,
      toExhibits,
      toNewdetail,lang
    };
  },
};
</script>

<style lang="less" scoped>
.center {
  padding: 0 0.75rem;
  .register {
    padding: 0 1.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    span {
      text-align: center;
      background: rgb(0, 44, 169);
      color: white;
      font-size: 0.75rem;
      padding: 0.625rem;
      margin: 0.9375rem;
    }
  }
  .showroom {
    height: 4rem;
    position: relative;
    > span {
      position: absolute;
      line-height: 4rem;
      margin-left: 0.9375rem;
      color: white;
      z-index: 1;
      top: 0;
      left: 0;
    }
  }
  .topisle {
    width: 100%;
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > div {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        text-align: center;
        > div {
          flex: 1;
          margin: 0.625rem;
          > h3 {
            font-size: 1.25rem;
            color: #1e6fff;
          }
          > p {
            font-size: 0.75rem;
          }
        }
      }
    }
  }

  .room {
    width: 100%;
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      > div {
        width: 10.8125rem;
        position: relative;
        > span {
          position: absolute;
          bottom: 0.5rem;
          left: 0.625rem;
          color: white;
        }
      }
    }
  }


  .news{
    .tabs{
      margin:1.25rem 0;
    }
  }
}


</style>
