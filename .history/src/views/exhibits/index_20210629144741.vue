<template>
  <div class="exhibits">
     <top-title>展品列表</top-title>
     <div class="search">
          <van-search
            v-model="value"
            left-icon=""
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          >
          

          
          
          </van-search>
     </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { Toast } from 'vant';
export default {
    setup() {
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast('取消');
    return {
      value,
      onSearch,
      onCancel,
    };
  },
}
</script>