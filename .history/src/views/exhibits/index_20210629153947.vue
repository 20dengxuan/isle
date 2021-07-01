<template>
  <div class="exhibits">
     <top-title>展品列表</top-title>
      <van-popup closeable close-icon="arrow-left" close-icon-position="top-left" :style="{height:'100%',width:'100%'}" v-model:show="show" position="bottom">
        <div class="header">更多筛选条件</div> 


        <van-form @submit="onSubmit" >
           <van-field/>
        </van-form>















      </van-popup>
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
            <div @click="show = true" style="width:50px;text-align:center">
              <van-icon size="29px" color="#78b8f9" name="bar-chart-o" />
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
    const show = ref(false)
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast('取消');

    const clear = ()=>onSearch(value.value)
    const onSubmit = (values) =>{
      console.log(values)
    }
    return {
      value,
      onSearch,
      onCancel,
      clear,
      show,
      onSubmit
    };
  },
}
</script>

<style lang="less" scoped>
  .header{
    height:50px;
    background:#4279ff;
    line-height:50px;
    color:white;
    text-align: center;
  }
</style>