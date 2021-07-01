<template>
  <div>
    <div v-html="state.content"></div>
  </div>
</template>


<script>
import {useRoute} from 'vue-router'
import {watch,onMounted,reactive} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    const store = useStore()
    const route = useRoute()
   

   const state = reactive({
     content:''
   })
   

    watch(()=>store.state.lang,(newVal)=>{
        getNewsById(newVal)
    })

    const getNewsById = (lang)=>{
      $apiCache({key:'getNewsById'},{relate_id:route.query.id,lang:lang}).then(res=>{
        state.content = res.data.content
      })
    }


    onMounted(() => {
      getNewsById(store.state.lang)
    })

    return{
      state
    }
  }
}
</script>


<style lang="less" scoped>
  .rich_pages{
    width:100% !important;
    
  }
</style>