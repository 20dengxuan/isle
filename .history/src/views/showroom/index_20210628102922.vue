<template>
  <div class="showroom">
    <header>
      <Seach />
      <div style="height: 20px"></div>
      <Swiper />
    </header>

    <div class="category">
        <div v-for="(c,index) in state.category" :key="index">
          <div><van-img :src="img[index].img" /></div>
          <p>{{store.state.lang === 'zh'?c.zh:c.en}}</p>
        </div>
    </div>
    

    <div class="img">
      <van-img height="7.0625rem" width='100%' src="//image-dev.3-e.cn/editor/ba4edb5174914018a2ce0be2695fd352.png"/>
    </div>
  </div>
</template>

<script>
import Seach from './components/seach.vue'
import Swiper from './components/swiper.vue'
import { $apiCache } from '../../assets/script/api-cache'
import {onMounted,watch,reactive,ref} from 'vue'
import {useStore} from 'vuex'
export default {
  components: { Seach, Swiper },
  setup() {
    const store = useStore()

    const state = reactive({
       category:[]
    })

    const img = ref([
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       
    ])

    watch(()=>store.state.lang,(newVal)=>{
      getExhibitsCategory(newVal)
    })

     //分类
    const getExhibitsCategory = (lang) => {
      $apiCache({ key: 'getExhibitsCategory' }, { lang:lang }).then((res) => {
        console.log(res);
        state.category = res.data
      });
    };

    onMounted(()=>{
      getExhibitsCategory(store.state.lang)
    })

    return {
       store,
       state,
       img
    }
  },
};
</script>

<style lang="less" scoped>
.showroom {
  header {
    height: 13.5rem;
    width: 100%;
    background: url("//image-dev.3-e.cn/editor/36d55482057b4de4939c28b6f26e0b3a.png");
    background-size: 100% 85%;
    background-repeat: no-repeat;
    padding: 1rem;
  }
  .category{
    width:100%;
    padding:1rem ;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    >div{
      width:3.425rem;
      >div{
        width:2.5rem;
        height:2.5rem;
        border-radius:50%;
        margin:0 auto;
        text-align: center;
        line-height:2.5em;
      }
      >p{
        padding:0.3125rem 0;
        font-size:0.75rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .img{
    padding:1rem;
  }
}
</style>
