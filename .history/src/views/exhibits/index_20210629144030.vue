<template>
  <div class="exhibits">
     <top-title>展品列表</top-title>
     <div class="search">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
     </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { Toast } from 'vant';
export default {
  
}
</script>