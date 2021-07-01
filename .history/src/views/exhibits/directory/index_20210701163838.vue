<template>
  <div>
      <van-search  @search="onSearch" v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref('')

     const onSearch = (val) => Toast(val);
    return{
      value,
      onSearch
    }
  }
}
</script>