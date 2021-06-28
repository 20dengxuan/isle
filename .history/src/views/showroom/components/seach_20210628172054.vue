<template>
<div>
    <van-field @update:model-value="update"  @focus="focus" @blur="blur" class="seach" v-model="value" :placeholder="action.data">
         <template v-slot:label>
            <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
              <template #reference>
               {{action.value}} <van-icon size="0.875rem" name="arrow-down" />
              </template>
            </van-popover>
         </template>
         
       </van-field>
       <div v-if="seachlist" class="lists">

       </div>
       </div>
</template>

<script>
import { ref ,reactive,watch} from 'vue';
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup() {
    const value = ref('')
    const action = reactive({
        value:'搜展品',
        data:'输入展品名称'
    })
    const showPopover = ref(false);
    const seachlist = ref(false)

    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: '搜展商' ,data:'搜寻本届展商名称获取'},
      { text: '搜展品',data:'输入展品名称' },
     
    ];
    const onSelect = (a) => {
      console.log(a)
      action.value = a.text
      action.data = a.data
    };

    const focus = () =>{
      seachlist.value = true
    }

    const blur = () =>{
      seachlist.value = false
    }

    const update = (str)=>{
      console.log(str,action.value)
    }

   

    return {
      value,
      actions,
      action,
      onSelect,
      showPopover,
      focus,
      blur,
      seachlist,
      update
    };
  },
};
</script>

<style lang="less" scoped>
div{

 position: relative;
     .seach{
        border-radius:1rem;
        font-size:0.875rem;
        height:2.1rem;
        display: flex;
        align-items: center;
        
      }
      .lists{
          width:(100% - 8px);
          min-height: 100px;
          max-height: 200px;
          background:white;
          position: absolute;
          z-index:2;
          left:16px;
         margin-top:10px;
        }
}
</style>