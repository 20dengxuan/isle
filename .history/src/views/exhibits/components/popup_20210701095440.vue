<template>
  <div class="poput">
    <nav>更多筛选条件</nav>

    <van-form @submit="onSubmit">
        
    </van-form>

  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    const form = reactive({
      
    })
   
   const onSubmit = (values) =>{
     console.log(value)
   }


   return {
     onSubmit
   }
  }
}
</script>

<style lang="less" scoped>
  .poput{
    nav{
      height:54px;
      line-height:54px;
      text-align: center;
      color:white;
      background:skyblue;
    }
  }
</style> 