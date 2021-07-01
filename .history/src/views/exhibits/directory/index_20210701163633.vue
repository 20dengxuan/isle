<template>
  <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  setup(){
    const value = ref('')


    return{
      value
    }
  }
}
</script>