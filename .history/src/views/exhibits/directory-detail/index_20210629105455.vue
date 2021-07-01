<template>
  <div class="dirdetail">
     <top-title>展商名录</top-title>
     <div class="top-img">
        
     </div>
  </div>
</template>


<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {reactive} from 'vue'
export default {
  setup(){
     const state =reactive({
       list:[]
     })

     //产品列表
     


    return{

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