<template>
  <div class="poput">
    <nav>更多筛选条件</nav>
    {{from}}
    <van-form @submit="onSubmit">
        <van-field v-model="form.category" />
    </van-form>

  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    const form = reactive({
       keyword:'',
       category:'',
       category_id:'',
       year:'',
       brand_id:'',
       price_start:'',
       price_end:'',
       display:''
    })
   
   const onSubmit = (values) =>{
     console.log(value)
   }


   return {
     form,
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