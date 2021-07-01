<template>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('not.Found.text1')}}</van-tab>
    <van-tab title="标签 2"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('not.Found.text1')}}</van-tab>
    <van-tab title="标签 3"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('not.Found.text1')}}</van-tab>
    <van-tab title="标签 4"
      ><van-img
        src="//image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png"
    />{{$t('not.Found.text1')}}</van-tab>
  </van-tabs>
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