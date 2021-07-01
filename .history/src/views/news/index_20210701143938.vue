<template>
  <div class="news">
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
     <div v-for='(l,index) in state.list' :key="index">
       {{l.title}}
     </div>
    </van-list>
  </div>
</template>

<script>
import {$apiCache} from '../../assets/script/api-cache'
import {reactive,watch,} from 'vue'
import {useStore} from 'vuex'
export default {
  setup(){
    const store = useStore()
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      page:0,
      last_page:0
    })

    const onLoad = ()=>{
      state.page++
       $apiCache({key:'getNewsList',type:2},{lang:app.$lang,page:state.page,page_size:12}).then(res=>{
          state.list.push(...res.data.data)
          console.log(state.list)
          state.loading=false
          if(state.page>=state.last_page){
            state.finished = true
          }
       })
    }
   const getpage = ()=>{
      $apiCache({key:'getNewsList',type:2},{lang:store.state.lang,page:1,page_size:12}).then(res=>{
        console.log(res)
        state.last_page = res.data.last_page
    })
   }
  getpage()

  watch(()=>store.state.lang,(newVal)=>{
     state.list = []
     state.page = 0
     getpage()
     onLoad()
  })


    return{
      state,
      onLoad
    }
  }
}
</script>