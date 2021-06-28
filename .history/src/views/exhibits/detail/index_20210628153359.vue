<template>
  <div class="detail">
    <div class="h_img">
       <van-img v-if="state.detail.images" height='230px' width="100%;" @click="imgShow()" :src="'//image-dev.3-e.cn/'+state.detail?.images" />    
    </div>
    <p class="title">{{state.detail.title}}</p>
    <p class="name">{{state.detail.company_name}}</p>
    <div class="lists">
      <div>
         <p>参考价</p>
         <p>单位</p>
         <p>类别</p>
         <p>品牌</p>
         <p>上市年份</p>
      </div>
      <div>
         <p>{{state.detail.price=== '0.00'?'面议':state.detail.price}}</p>
         <p>——</p>
         <p>{{state.detail.categories}}</p>
         <p>{{state.detail.brand_name}}</p>
         <p>{{new Date().getFullYear() - state.detail.year}}</p>
        
      </div>
    </div>
    <p>— 展品详情 —</p>
    <div v-html="state.detail.detail"></div>

  </div>
</template>

<script>

import {useRoute} from 'vue-router'
import {reactive,onMounted,watch} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'

import {ImagePreview} from 'vant'
export default {
  name:'detail',
   setup(){
     const route = useRoute()
     const store = useStore()
     const state = reactive({
       id:route.query.id,
       detail:{}
     })

    watch(()=>store.state.lang,(newVal)=>{
      getExhibitDetail(newVal)
    })

     //获取展品详情
     const getExhibitDetail = (lang)=>{
        $apiCache({key:'getExhibitDetail',type:2},{lang,exhibits_id:state.id}).then(res=>{
          state.detail = res.data
          console.log(res)
        })
     }

     onMounted(()=>{
       getExhibitDetail(store.state.lang)
     })


     const imgShow = ()=>{
       ImagePreview([
         '//image-dev.3-e.cn/'+state.detail.images
       ])
     }



     return{
       state,
       imgShow
     }
   }

}
</script>


<style lang="less" scoped>
.detail{
  width:100%;
  padding:16px;
  .h_img{
    border:1px solid #969696;
  }
  .lists{
    
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      p{
        font-size:13px;
      }
    }
  }
}


  
</style>