<template>
  <div class="showroom">
    <header>
      <Seach />
      <div style="height: 1.25rem"></div>
      <Swiper />
    </header>

    <div class="category">
         
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
        category = res.data
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
}
</style>
