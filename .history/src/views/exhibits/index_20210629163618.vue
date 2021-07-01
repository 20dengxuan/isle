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

     <div class='lists'>
          <div class="list">
              
          </div>
     </div>
  </div>
</template>


<script>
import { ref,reactive } from 'vue';
import { Toast } from 'vant';

import {$apiCache} from '../../assets/script/api-cache'
export default {
    setup() {
    const show = ref(false)
    const value = ref('');

    const state = reactive({
      value:'',
      showPicker:false
    })

    const form = reactive({
      page:1,
      page_size:16,
      keyword:'',
      category_id:'',
      year:'',
      brand_id:'',
      price_start:0,
      price_end:10000,
      display:'',
      lang:'zh'
    })

    $apiCache({key:'getExhibits'},from).then(res=>{
         console.log(res)
    })




    const onSearch = (val) => Toast(val);
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
      onSubmit,
      state,

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