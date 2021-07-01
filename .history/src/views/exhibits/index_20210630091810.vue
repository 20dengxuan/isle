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
        class="lists"
      >
        <div v-for="(l,index) in state.list" :key="index" class="list">
            <van-img width="180px" height="151px" :src="'//image-dev.3-e.cn/'+l.image_default"/>
            <p>{{l.title}}</p>
            <p>{{new Date().getFullYear() - l.year}}年发布</p>
            <p><span>参考价：</span>{{l.price}}</p>
        </div>
     </van-list>


  </div>
</template>


<script>
import { ref,reactive ,onMounted,watch, computed} from 'vue';
import { useStore} from 'vuex'
import { Toast } from 'vant';

import {$apiCache} from '../../assets/script/api-cache'
export default {
    setup() {

    const show = ref(false)
    const value = ref('');
    const store = useStore()
    const state = reactive({
      loading: false,
      finished: false,
      list:[],
      count:0
    });
 


    const form = reactive({
      page:0,
      page_size:16,
      keyword:'',
      category_id:'',
      year:'',   
      lang:'zh'
    })

  
    const onLoad = ()=>{
      if(page ===0 ){
          form.lang = computed(()=> store.state.lang )
      }
      
        form.page ++
        $apiCache({key:'getExhibits'},form).then(res=>{
        state.list.push(...res.data.items)
        console.log(res)
        state.loading = false
        if(state.list.length >= res.data.count){
          state.finished = true
        }
        })
    }
  
  watch(()=>store.state.lang,(newVal)=>{
      state.list = []
      onLoad()
  })
  




    const onSearch = (val) => {
      form.keyword = val
      state.list = []
      form.page = 0
      onLoad()
    };
    const onCancel = () => Toast('取消');

    const clear = ()=>onSearch(value.value)
    

    









    











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
 .lists{
  
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
    .list{
      margin:4px 0;
    border:1px solid #e4e1e1;
     width:182px;
    p{
      padding:5px;
    }
    >p:nth-of-type(1){
      font-size:14px;
    }
   >p:nth-of-type(2){
      font-size:12px;
    }
    >p:nth-of-type(3){
      font-size:14px;
      color:red;

      span{
        color:black;
        font-size:12px;
      }
    }
  }
 }
</style>