<template>
  <div class="detail">
    <div class="h_img">
       <van-img v-if="state.detail.images" height='14.375rem' width="100%;" @click="imgShow()" :src="'//image-dev.3-e.cn/'+state.detail?.images" />    
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
         <p><span>{{state.detail.brand_name}}</span></p>
         <p>{{new Date().getFullYear() - state.detail.year}}</p>
        
      </div>
    </div>
    <p class="dtitle">— 展品详情 —</p>
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
  padding:1rem;
  .h_img{
    border:0.0625rem solid #969696;
  }
  .lists{
    margin:1.25rem 0;
    padding:0.625rem 0;
    border-bottom:0.25rem solid #adadad;
     display: flex;
     justify-content: space-between;
     p{
       padding:0.5rem 0;
     }
    >div:nth-of-type(1){
      p{
        font-size:0.8125rem;
        color:#8f8f8f;
      }
    }
    >div:nth-of-type(2){ 
      p{
        font-size:0.8125rem;
        width:15.75rem;
      }
      >p:nth-of-type(1){
        color:red;
      }
      >p:nth-of-type(4){
        >span{
          background:#e3ebff;
          color: #4479fd;
          border-radius: 0.25rem;
          padding: 0.25rem 0.625rem;
        }
      }
    }
  }
  .title{
    font-size:0.8125rem;
    margin:0.625rem 0;
  }
  .dtitle{
    margin:0.625rem 0;
    text-align:center;
    font-size:0.875rem;
    color:#666666;
  }
  .name{
    background:#4479fd;
    border-radius: 0.3125rem;
    color:white;
    font-size:0.75rem;
    padding:0.3125rem;
  }
}


  
</style>