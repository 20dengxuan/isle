<template>
  <div class="dirdetail">
     <top-title>展商名录</top-title>
     <div class="top-img">
         <span>{{state.lists?.items[0].company_name}}</span>
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
       id:route.query.id
     })

     watch(()=>store.state.lang,(newVal)=>{
        exhibitorListAllList(newVal)
     })

     //产品列表
     const exhibitorListAllList = (lang) =>{
        $apiCache({key:'exhibitorListAllList'},{company_id:state.id,lang,page:1,page_size:20}).then(res=>{
          console.log(res.data)
            state.lists = res.data
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
    height:51px;
    width:100%;
    background-size:100% 100%;
    background-image: url('https://image-dev.3-e.cn/editor/92c762f49e73430aad1366ce532c0f7c.png');
  }
</style>