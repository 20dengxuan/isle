<template>
  <div class="exhibits">
     <top-title>展品列表</top-title>
      <van-popup v-model:show="show">内容</van-popup>
     <div class="search">
          <van-search
            v-model="value"
            left-icon=""
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            shape="round"
            show-action
            :clearable='false'
          >
          <template v-slot:right-icon>
              <van-icon @click="clear()" size="19px" name="search" />
          </template> 

          <template v-slot:action>
            <div style="width:50px;text-align:center">
              <van-icon size="29px" name="bar-chart-o" />
            </div> 
          </template>        
          </van-search>
     </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { Toast } from 'vant';
export default {
    setup() {
    const show = ref(true)
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast('取消');

    const clear = ()=>onSearch(value.value)

    return {
      value,
      onSearch,
      onCancel,
      clear,
      show
    };
  },
}
</script>

<style lang="less" scoped>
  
</style>