<template>
  <div class="poput">
    <nav>更多筛选条件</nav>
    {{form}}
    <van-form @submit="onSubmit">
        <van-field placeholder="选择分类" @click="show.showCategory = true" readonly v-model="form.category" />
    </van-form>
    <van-popup v-model:show="show.showCategory" round position="bottom" >
        <van-picker :columns-field-names="customFieldName" :columns="columns" @cancel="show.showCategory = false" @confirm='onConfirm' />
    </van-popup>
  </div>
</template>

<script>
import {reactive,ref} from 'vue'
import {$apiCache} from '../../../assets/script/api-cache'
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

    //分类
    const columns = ref([]);
    const getExhibitsCategory = ()=>{
      $apiCache({key:'getExhibitsCategory',type:2},{lang:app.$lang}).then(res=>{
        console.log(res)
        columns.value = res.data
      })
    }
    const customFieldName = {
      text:'name',
      children:'son'
    }
    getExhibitsCategory()
    const onConfirm = (value) => {
      form.category = value;
      show.showCategory = false;
    };



   const onSubmit = (values) =>{
     console.log(values)
   }


   return {
     form,
     show,
     onConfirm,
     customFieldName,
     columns,
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