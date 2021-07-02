<template>
  <div>
    <top-title>采购意向</top-title>

    {{form}}
    <van-form @failed="onFailed">

       <!-- 姓名 -->
       <p><span>*</span>您的姓名</p>
       <van-field v-model="form.name" name="name" 
       placeholder="请输入"
       :rules="[{required:true,message:'必须填写姓名'}]"
       /> 


       <p><span>*</span>你所在的国家</p>
       <van-field v-model="form.country_code" right-icon="" />

    </van-form>
    <!-- //image-dev.3-e.cn/editor/9b05959f1655408294aa5b2aa5376711.png -->
  </div>
</template>


<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {reactive} from 'vue'
export default {
  setup(){
    const form = reactive({
    category_id: 2,
    category_pid: 1,
    cellphone: "17534643678",
    cellphone_prefix: "86",
    content: "hhhhhhh",
    country_code: "EG",
    email: "20001114@qq.com",
    industry_id: 367,
    name: "hh",
    })
    

    const onSubmit = (values) =>{
      console.log(values)
      // $apiCache({key:'submitIntention'},form).then(res=>{
      //     console.log(res)
      // })
    }

    return {
      form,
      onSubmit
    }
  }
}
</script>