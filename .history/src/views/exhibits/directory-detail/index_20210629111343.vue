<template>
  <div class="dirdetail">
     <top-title>展商名录</top-title>
     <div class="top-img">
         <span>{{state.title}}</span>
     </div>
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
</style>