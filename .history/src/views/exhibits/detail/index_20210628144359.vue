<template>
  <div class="detail">
    <van-img height='230px' @click="imgShow()" :src="'//image-dev.3-e.cn/'+state.detail?.original_images" />
  </div>
</template>

<script>

import {useRoute} from 'vue-router'
import {reactive,onMounted,watch} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'

import {ImagePreview} from 'vant'
export default {
   setup(){
     const route = useRoute()
     const store = useStore()
     const state = reactive({
       id:route.query.id,
       detail:{}
     })

    watch(()=>store.state.lang,(newVal)=>{
      getExhibitDetail(newVal)
    })

     //获取展品详情
     const getExhibitDetail = (lang)=>{
        $apiCache({key:'getExhibitDetail',type:2},{lang,exhibits_id:state.id}).then(res=>{
          state.detail = res.data
        })
     }

     onMounted(()=>{
       getExhibitDetail(store.state.lang)
     })



     const imgShow = ()=>{
       ImagePreview([
         '//image-dev.3-e.cn/'+state.detail.original_images
       ])
     }



     return{
       state,
       imgShow
     }
   }

}
</script>


<style lang="less" scoped>
.detail{
  width:100%;
  padding:16px;

}


  
</style>