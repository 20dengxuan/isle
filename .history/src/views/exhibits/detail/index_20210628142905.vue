<template>
  <div>
    details
  
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {reactive,onMounted} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
   setup(){
     const route = useRoute()
     const store = useStore()
     const state = reactive({
       id:route.query.id,
       detail:{}
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

     return{
       state
     }
   }

}
</script>