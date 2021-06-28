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
            <div v-if="state.list.length === 0">
               hhhhh
            </div>
            <div v-else>
                <p v-for="(l,index) in state.list" :key="index">
                  {{l.name}}
                </p>
            </div>
       </div>
       </div>
</template>

<script>
import { ref ,reactive,watch,onMounted} from 'vue';
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup() {
    const value = ref('')
    const store = useStore()

    const state = reactive({
       exhibi:[],
       list:[]
    })

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

    let a = 'JFWJFfwug'
    console.log(a.indexOf('fk'))

    const focus = () =>{
      seachlist.value = true
    }

    const blur = () =>{
      seachlist.value = false
    }

    const update = (str)=>{
      state.list = []
      if(str === '') return
      if(action.value === '搜展商'){
         state.exhibi.map(item=>{
          if(item.name.indexOf(str) != -1){
            state.list.push(item)
          }
        })
        console.log(state.list)
      }
    }

  //所有展商
  const getExhibitSelection = (lang)=>{
    $apiCache({key:'getExhibitSelection',type:2},{lang:lang}).then(res=>{
      state.exhibi = res.data
      console.log(state.exhibi)
    })
  }
   
   onMounted(()=>{
     getExhibitSelection(store.state.lang)
   })

    return {
      value,
      actions,
      action,
      onSelect,
      showPopover,
      focus,
      blur,
      seachlist,
      update,state
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
          max-height: 150px;
          background:white;
          position: absolute;
          z-index:2;
          left:16px;
          margin-top:10px;
          overflow:auto;
          p{
            text-overflow: ellipsis;
            padding:3px;
            font-size:12px;
            white-space: nowrap;
            overflow: hidden;
          }
        }
}
</style>