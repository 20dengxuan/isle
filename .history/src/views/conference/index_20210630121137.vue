<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1"><van-img src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"/></van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
     const active = ref(1)
     return{
       active
     }
  }
}
</script>