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
              <van-icon @click="clear()" size="1.1875rem" name="search" />
          </template> 

          <template v-slot:action>
            <div @click="show = true" style="width:3.125rem;text-align:center">
              <van-icon size="1.8125rem" color="#78b8f9" name="bar-chart-o" />
            </div> 
          </template>        
          </van-search>
     </div>

     <div class="searchList">
         <p>展品类目</p>
         <p>展品品牌</p>
         <p>价格区间</p>
     </div>     

     <van-list
       ref='root'
        v-model:loading="state.loading"
        :finished="state.finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="lists"
      >
        <div @click="todetail(l.id)" v-for="(l,index) in state.list" :key="index" class="list">
            <van-img width="100%" height="9.4375rem" :src="'//image-dev.3-e.cn/'+l.image_default"/>
            <p>{{l.title}}</p>
            <p>{{new Date().getFullYear() - l.year}}年发布</p>
            <p><span>参考价：</span>{{l.price==='0.00'?'面议':l.price}}</p>
        </div>
     </van-list>

    <van-popup close-icon="arrow-left" close-icon-position="top-left" closeable :style="{height:'100%',width:'100%'}" position="bottom" v-model:show="show">
       <Poput @toSearch="toSearch" />
    </van-popup>
  </div>
</template>


<script>
import { ref,reactive ,onMounted,watch, computed} from 'vue';
import { useStore} from 'vuex'
import { Toast } from 'vant';
import {useRouter,useRoute} from 'vue-router';
import {$apiCache} from '../../assets/script/api-cache'
import Poput from './components/popup'
export default {
    name:'exhibits',
    components:{
     Poput
    },
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
   const route = useRoute()


    const form = reactive({
      page:0,
      page_size:16,
      keyword:'',
      category_id:route.query.id || '',
      brand_id:'',
      year:'',   
      lang:store.state.lang,
       price_start:'0',
       price_end:'',
    })

    // form.lang = computed(()=> store.state.lang )
      
  
    const onLoad = ()=>{
      
      
        form.page ++
        $apiCache({key:'getExhibits'},form).then(res=>{
        state.list.push(...res.data.items)
      
        state.loading = false
        if(state.list.length >= res.data.count){
          state.finished = true
        }
        })
    }
  
  watch(()=>store.state.lang,(newVal)=>{
      form.page = 0
      state.list = []
      form.lang = newVal
      onLoad()
  })
  
    const root=ref('')
    
   
console.log(root)

    const onSearch = (val) => {
      form.category_id = ''
      form.keyword = val
      state.list = []
      form.page = 0
      onLoad()
    };
    const onCancel = () => Toast('取消');

    const clear = ()=>onSearch(value.value)
    
 

   const router = useRouter()

   const todetail = (id)=>{
      router.push({name:'detail',query:{id}})
   }



   const toSearch = (e)=>{
     show.value = false
     form.brand_id = e.brand_id
     form.price_start = e.price_start
     form.price_end = e.price_end
     form.category_id = e.category_id
     state.list = []
     form.page = 0
     onLoad()
   }



    return {
      todetail,
      value,
      onSearch,
      onCancel,
      clear,
      show,
      state,
      onLoad,
      root,
      toSearch
    };
  },
}
</script>

<style lang="less" scoped>
  .header{
    height:3.125rem;
    background:#4279ff;
    line-height:3.125rem;
    color:white;
    text-align: center;
  }
  .searchList{
    background:#f0f4ff;
    padding:10px;
    margin:8px;
    p{
       font-size:12px;
       color:#7b7b7b;
       margin:5px 0;
    }
  }
 .lists{
  
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
    .list{
      border-radius:4px;
      margin:0.25rem 0;
    border:0.0625rem solid #e4e1e1;
     width:11.005rem;
    p{
      padding:0.2125rem;
    }
    >p:nth-of-type(1){
      font-size:0.875rem;
    }
   >p:nth-of-type(2){
      font-size:0.75rem;
    }
    >p:nth-of-type(3){
      font-size:0.875rem;
      color:red;

      span{
        color:black;
        font-size:0.75rem;
      }
    }
  }
 }
</style>