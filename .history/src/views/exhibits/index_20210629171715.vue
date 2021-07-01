<template>
  <div class="exhibits">
     <top-title>展品列表</top-title>
     
     <div class="search">
          <van-search
            v-model="value"
            left-icon=""
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            shape="round"
            show-action
            :clearable='false'
          >
          <template v-slot:right-icon>
              <van-icon @click="clear()" size="19px" name="search" />
          </template> 

          <template v-slot:action>
            <div @click="show = true" style="width:50px;text-align:center">
              <van-icon size="29px" color="#78b8f9" name="bar-chart-o" />
            </div> 
          </template>        
          </van-search>
     </div>
     

     <van-list
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(l,index) in state.list" :key="index" class="list">
              {{l.title}}
        </div>
     </van-list>


  </div>
</template>


<script>
import { ref,reactive ,onMounted} from 'vue';
import { Toast } from 'vant';

import {$apiCache} from '../../assets/script/api-cache'
export default {
    setup() {
    const show = ref(false)
    const value = ref('');
    
    const state = reactive({
      loading: false,
      finished: false,
      list:[]
    });
 


    const form = reactive({
      page:0,
      page_size:16,
      keyword:'',
      category_id:'',
      year:'',
      brand_id:'',
      price_start:0,
      price_end:10000,
      display:'',
    })

  
    const onLoad =async ()=>{
       form.page ++
        $apiCache({key:'getExhibits'},form).then(res=>{
        state.list.push(...res.data.items)
        state.loading = false
        console.log(state.list.length ,res.data.count)
        if(state.list.length >= res.data.count){
          state.finished = true
        }
        })
    }

    const getExhibits = ()=>{
        $apiCache({key:'getExhibits'},form).then(res=>{
        state.list.push(...res.data.items)
        // count = res.data.count
       
        })
    }

    // onMounted(()=>{
    //   getExhibits()
    // })
  




    const onSearch = (val) => {
      form.keyword = val
      state.list = []
      state.page = 1
      getExhibits()
    };
    const onCancel = () => Toast('取消');

    const clear = ()=>onSearch(value.value)
    const onSubmit = (values) =>{
      console.log(values)
    }

    









    











    return {
      value,
      onSearch,
      onCancel,
      clear,
      show,
      state,
      onLoad,
    };
  },
}
</script>

<style lang="less" scoped>
  .header{
    height:50px;
    background:#4279ff;
    line-height:50px;
    color:white;
    text-align: center;
  }
</style>