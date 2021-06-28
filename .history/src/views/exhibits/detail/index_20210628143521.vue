<template>
  <div>
    <button @click="imgShow()">show</button>
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
         'https://img.yzcdn.cn/vant/apple-1.jpg'
       ])
     }



     return{
       state,
       imgShow
     }
   }

}
</script>