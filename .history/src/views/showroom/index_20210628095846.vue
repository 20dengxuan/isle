<template>
  <div class="showroom">
    <header>
      <Seach />
      <div style="height: 20px"></div>
      <Swiper />
    </header>

    <div class="category">
        <div>
          <div></div>
          <p>大屏显示</p>
        </div>
    </div>

  </div>
</template>

<script>
import Seach from './components/seach.vue'
import Swiper from './components/swiper.vue'
import { $apiCache } from '../../assets/script/api-cache'
import {onMounted,watch,reactive} from 'vue'
import {useStore} from 'vuex'
export default {
  components: { Seach, Swiper },
  setup() {
    const store = useStore()

    const state = reactive({
       category:[]
    })

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
        state
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
    padding:0.625rem 0;
    >div{
      width:5.125rem;
      >div{
        width:2.5rem;
        height:2.5rem;
        border:0.0625rem solid red;
        border-radius:50%;
        margin:0 auto;
      }
      >p{
        padding:0.3125rem 0;
        font-size:0.75rem;
        text-align: center;
      }
    }
  }
}
</style>
