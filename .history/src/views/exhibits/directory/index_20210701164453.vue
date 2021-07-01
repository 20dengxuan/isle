<template>
  <div>
      <van-search  @search="onSearch" v-model="value" placeholder="请输入搜索关键词" 
      >
      <template v-slot:left-icon>
          <van-icon @click="onSearch()" name="search" />
      </template>
      
      </van-search>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    const value = ref('')

     const onSearch = (val) => console.log(val)
    return{
      value,
      onSearch
    }
  }
}
</script>