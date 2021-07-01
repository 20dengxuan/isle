<template>
  <div>
      <van-search round @search="onSearch" v-model="value" placeholder="请输入搜索关键词" 
      >
      <template v-slot:left-icon>
          <van-icon @click="onSearch(value)" name="search" />
      </template>
      </van-search>

      


  </div>
</template>

<script>
import {ref} from 'vue'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    const value = ref('')
     const onSearch = (val) => {
        $apiCache({key:'getExhibitorDirectory'})
     }
    return{
      value,
      onSearch
    }
  }
}
</script>