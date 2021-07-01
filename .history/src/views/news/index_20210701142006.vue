<template>
  <div class="news">
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
import {$apiCache} from '../../assets/script/api-cache'
import {reactive,watch,} from 'vue'
export default {
  setup(){
    const state = {
      list: [],
      loading: false,
      finished: false,
      page:0,
    }

    const onLoad = ()=>{
       $apiCache({key:'getNewsList',type:2},{lang:app.$lang,page:state.page,page_size:12}).then(res=>{
          // state.list.push(res)
          console.log(res.data)
       })
    }

    return{
      state,
      onLoad
    }
  }
}
</script>