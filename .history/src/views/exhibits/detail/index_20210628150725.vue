<template>
  <div class="detail">
    <div class="h_img">
       <van-img v-if="state.detail.images" height='230px' width="100%;" @click="imgShow()" :src="'//image-dev.3-e.cn/'+state.detail?.images" />
       <p></p>
       <p></p>
    </div>
   
   
  </div>
</template>

<script>

import {useRoute} from 'vue-router'
import {reactive,onMounted,watch} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'

import {ImagePreview} from 'vant'
export default {
  name:'detail',
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
          console.log(res)
        })
     }

     onMounted(()=>{
       getExhibitDetail(store.state.lang)
     })


     const imgShow = ()=>{
       ImagePreview([
         '//image-dev.3-e.cn/'+state.detail.images
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
  .h_img{
    border:1px solid #969696;
  }
}


  
</style>