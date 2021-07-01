<template>
  <div class="newdetail">
    <top-title v-if="state.content" >{{state.title}}</top-title>
    <div class="content" v-html="state?.content"></div>
  </div>
</template>


<script>
import {useRoute} from 'vue-router'
import {watch,onMounted,reactive} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  name:'detail/news',
  setup(){
    const store = useStore()
    const route = useRoute()
   

   const state = reactive({
     content:'',
     title:''
   })
   

    watch(()=>store.state.lang,(newVal)=>{
        getNewsById(newVal)
    })

    const getNewsById = (lang)=>{
      $apiCache({key:'getNewsById'},{relate_id:route.query.id,lang:lang}).then(res=>{
        state.content = res.data?.content
        state.title = res.data?.title
        // .replace(/!important/g,'')
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
  .newdetail{
    width:100%;
    
  }
</style>