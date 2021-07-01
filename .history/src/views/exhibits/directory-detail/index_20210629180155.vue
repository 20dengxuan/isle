<template>
  <div class="dirdetail">
     <top-title>展商名录</top-title>
     <div class="top-img">
         <p>{{state.title}}</p>
     </div>
      
      <p style="font-size:0.75rem;padding:0.625rem;">所有产品</p>

      <van-list 
      class="lists"
       v-model:loading="loading"
        :finished="finished"
        finished-text="----我是有底线的----"
        @load="onLoad"
      >
        <div @click="todetail(l.id)" class="list" v-for="(l,index) in state.lists" :key="index" >
             <van-img height='9.875rem' width="11.8125rem" :src="'//image-dev.3-e.cn/'+l.image_default" />
             <p>{{l.title}}</p>
             <p>{{new Date().getFullYear() - l.year}}年发布</p>
             <p><span>参考价:</span>{{l.price==='0.00' ? '面议':'l.price'}}</p>
        </div> 
      </van-list>





  </div>
</template>


<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {reactive,watch,ref,onMounted,} from 'vue'
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
export default {
  name:'dirdetail',
  setup(){
     const store =useStore()
     const route = useRoute()
     const router = useRouter()
     const state =reactive({
       lists:[],
       id:route.query.id,
       title:'',
       page:0,
       count:0
     })
     const loading=ref(false)
     const finished= ref(false)
     const onLoad = ()=>{
        state.page ++
        $apiCache({key:'exhibitorListAllList'},{company_id:state.id,lang:store.state.lang,page:state.page,page_size:1}).then(res=>{
            state.lists.push(...res.data.items)
            console.log(state.lists)
            loading.value = false
            if(state.lists.length >= res.data.count){
              finished.value = true
            }
        })
     }


     //产品列表
     const exhibitorListAllList = (lang) =>{
        $apiCache({key:'exhibitorListAllList'},{company_id:state.id,lang,page:state.page,page_size:20}).then(res=>{
          console.log(res.data)
            // state.lists.push = res.data.items
            state.count = res.data.count
            state.title = res.data.items[0]?.company_name
          
        })
     }
     const todetail = (id) =>{
       router.push({name:'detail',query:{id:id}})
     }

     onMounted(()=>{
       exhibitorListAllList(store.state.lang)
     })


    return{
       state,
       loading,
       finished,
       onLoad,
       todetail
    }
  }
}
</script>

<style lang="less" scoped>
  .top-img{
    color:white;
    line-height:3.1875rem;
    padding-left:7rem;
    height:3.1875rem;
    width:100%;
    font-size:0.875rem;
    background-size:100% 100%;
    background-image: url('https://image-dev.3-e.cn/editor/92c762f49e73430aad1366ce532c0f7c.png');
    p{
      width:100%;
      overflow: hidden;
      white-space:nowrap;
      text-overflow: ellipsis;
    }
  }
  .lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list{
      width:10.8125rem;
      margin:0.625rem 0.3125rem;
      border: 0.0625rem solid #dedede;
      border-radius: 0.3125rem;
      overflow: hidden;
      p{
        padding:0.1875rem 0.3125rem;
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
      }
      >p:nth-of-type(1){
        font-size:0.8125rem;
        height:1.75rem;
      }
      >p:nth-of-type(2){
        font-size:0.75rem;
        color:#969696;
      }
      >p:nth-of-type(3){
        font-size:0.875rem;
        color:red;
        span{
          font-size:0.75rem;
          color:black;

        }
      }
    }
  }
</style>