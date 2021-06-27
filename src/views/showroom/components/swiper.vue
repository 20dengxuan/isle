<template>
    
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
        </van-swipe-item>
    </van-swipe>
    
</template>

<script>
export default {
  setup() {
    const images = [
      '//image-dev.3-e.cn/editor/85d3cea08d1a432d9856d3587849b540.png?',
      '//image-dev.3-e.cn/editor/f5fff74815f0401788e4927e5ec25000.png',
      '//image-dev.3-e.cn/editor/94a36a9e6442422cb41ba8f6771ba68e.png',
      '//image-dev.3-e.cn/editor/bd0b020b293746cf9e05ee6be4e105da.png',
    ];
    return { images };
  },
}
</script>

<style lang="less" scoped>
    img{
        height:8.875rem;
        width:100%;
        border-radius: 0.625rem;
    }
</style>