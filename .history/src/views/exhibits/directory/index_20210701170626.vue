<template>
  <div>
      <van-search round @search="onSearch" v-model="value" placeholder="请输入搜索关键词" 
      >
      <template v-slot:left-icon>
          <van-icon @click="onSearch(value)" name="search" />
      </template>
      </van-search>

      <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in state.list" :key="item" :title="item.company_name" />
      </van-list>


  </div>
</template>

<script>
import {ref,reactive} from 'vue'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      page:0
    });
    const value = ref('')
     const onSearch = () => {
       state.page=0
       state.list = []
       state.finished = false
       onLoad()
     }

  const onLoad = ()=>{
    state.page++
    $apiCache({key:'getExhibitorDirectory'},{keyword:value.value,lang:app.$lang,page:1,page_size:20}).then(res=>{
        state.list.push(...res.data.items)
        console.log(res)
        state.loading=false 
        if(state.list.length >= res.data.count)  {
          state.finished = true
        }
    })
  }

  

    return{
      value,
      onSearch,
      state,
      onLoad,
    }
  }
}
</script>