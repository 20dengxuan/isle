<template>
  <div class="poput">
    <nav>更多筛选条件</nav>
    {{form}}
    <van-form @submit="onSubmit">
        <van-field readonly v-model="form.category" />
    </van-form>
    <van-popup v-model:show="show.showCategory" round position="bottom" >
        <van-picker />
    </van-popup>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  setup(){
    const show = reactive({
      showCategory:false
    })
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
     show,
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