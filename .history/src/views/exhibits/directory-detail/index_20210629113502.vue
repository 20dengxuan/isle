<template>
  <div class="dirdetail">
     <top-title>展商名录</top-title>
     <div class="top-img">
         <span>{{state.title}}</span>
     </div>




      <van-list class="lists">
        <div class="list" v-for="(l,index) in state.lists.items" :key="index" >
             <van-img height='158px' width="189px" :src="'//image-dev.3-e.cn/'+l.image_default" />
             <p>{{l.title}}</p>
             <p>{{new Date().getFullYear() - l.year}}年发布</p>
             <p><span>参考价</span>{{l.price==='0.00' ? '面议':'l.price'}}</p>
        </div> 
      </van-list>





  </div>
</template>


<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {reactive,watch,res,onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
export default {
  setup(){
     const store =useStore()
     const route = useRoute()
     const state =reactive({
       lists:[],
       id:route.query.id,
       title:'',
       page:1
     })

     watch(()=>store.state.lang,(newVal)=>{
        exhibitorListAllList(newVal)
     })

     //产品列表
     const exhibitorListAllList = (lang) =>{
        $apiCache({key:'exhibitorListAllList'},{company_id:state.id,lang,page:state.page,page_size:20}).then(res=>{
          console.log(res.data)
            state.lists = res.data
            state.title = res.data.items[0].company_name
          
        })
     }

     onMounted(()=>{
       exhibitorListAllList(store.state.lang)
     })


    return{
       state
    }
  }
}
</script>

<style lang="less" scoped>
  .top-img{
    color:white;
    line-height:51px;
    padding-left:112px;
    height:51px;
    width:100%;
    font-size:14px;
    background-size:100% 100%;
    background-image: url('https://image-dev.3-e.cn/editor/92c762f49e73430aad1366ce532c0f7c.png');
  }
  .lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list{
      margin:10px 5px;
      border: 1px solid #dedede;
      border-radius: 5px;
      overflow: hidden;
      p{
        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
      }
      >p:nth-of-type(1){
        font-size:13px;
        height:28px;
      }
      >p:nth-of-type(2){
        font-size:12px;
        color:#969696;
      }
      >p:nth-of-type(3){
        font-size:14px;
        color:red;
        span{
          font-size:12px;
          color:black;

        }
      }
    }
  }
</style>