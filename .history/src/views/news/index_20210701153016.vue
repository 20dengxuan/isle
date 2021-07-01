<template>
  <div class="news">
    <top-title>News</top-title>
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
     <div class="list" style="height:80px;" v-for='(l,index) in state.list' :key="index">
       <van-img height="100px" width="150px" :src="l.img_url"/>
       <div>
         <p>{{l.title}}</p>
         <p>{{l.publish_time_text}}</p>
       </div>
     </div>
    </van-list>
  </div>
</template>

<script>
import {$apiCache} from '../../assets/script/api-cache'
import {reactive,watch,onMounted} from 'vue'
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
       $apiCache({key:'getNewsList'},{lang:store.state.lang,page:state.page,page_size:12}).then(res=>{
          state.list.push(...res.data.data)
          console.log(state.list)
          state.loading=false
          console.log(state.page,state.last_page)
          if(state.page>=state.last_page){
            state.finished = true
          }
       })
    }
   const getpage = ()=>{
      $apiCache({key:'getNewsList'},{lang:store.state.lang,page:1,page_size:12}).then(res=>{
        state.last_page = res.data.last_page
    })
   }
  

  onMounted(()=>{
     getpage(store.state.lang)
  })

  watch(()=>store.state.lang,async (newVal)=>{  
     getpage()
     state.list = []
     state.page = 0
     state.finished = false
    await onLoad()
  })


    return{
      state,
      onLoad
    }
  }
}
</script>


<style lang="less" scoped>
.news{
  padding:0 16px;
  .list{
  width:100%;
  margin-top:40px;
  display:flex;
  justify-content: space-around;
  >div{
    width:180px;
    >p:nth-of-type(1){
      font-size:15px;
    }
    >p:nth-of-type(2){
      font-size:12px;
      color:#969696;
    }
  }
}
}

  
</style>