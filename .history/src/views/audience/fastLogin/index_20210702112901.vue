<template>
  <div>
    <top-title>采购意向</top-title>
    <van-form @failed="onFailed">


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
    lang: "zh",
    name: "hh",
    })
    

    const submitIntention = () =>{
      $apiCache({key:'submitIntention'},form).then(res=>{
          console.log(res)
      })
    }


  }
}
</script>