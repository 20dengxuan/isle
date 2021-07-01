<template>
  <div>
    <top-title>ISLE {{$t('conferenceDet.title1')}}</top-title>
    <van-tabs v-model:active="active">
    <van-tab title="02/26"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('notFound.text1')}}</van-tab>
    <van-tab title="02/27"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('notFound.text1')}}</van-tab>
    <van-tab title="02/28"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('notFound.text1')}}</van-tab>
    <van-tab title="03/01"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('notFound.text1')}}</van-tab>
  </van-tabs>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>

<style lang="less" scoped>
*{
  text-align: center;
}
  
</style>