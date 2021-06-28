<template>
    <van-field :focus="focus" class="seach" v-model="value" :placeholder="action.data">
         <template v-slot:label>
            <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
              <template #reference>
               {{action.value}} <van-icon size="0.875rem" name="arrow-down" />
              </template>
            </van-popover>
         </template>
       </van-field>
</template>

<script>
import { ref ,reactive} from 'vue';

export default {
  setup() {
    const value = ref('')
    const action = reactive({
        value:'搜展品',
        data:'输入展品名称'
    })
    const showPopover = ref(false);

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
      console.log('----------hh')
    }

    return {
      value,
      actions,
      action,
      onSelect,
      showPopover,
      focus
    };
  },
};
</script>

<style lang="less" scoped>
     .seach{
        border-radius:1rem;
        font-size:0.875rem;
        height:2.1rem;
        display: flex;
        align-items: center;
      }
</style>