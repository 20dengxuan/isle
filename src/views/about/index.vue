<template>
    <div>
      <top-title>展会状况</top-title>
      <van-img height="9.375rem" width="100%" src="//image-dev.3-e.cn/editor/9768a44ac36d44daaf480ab794f930d4.png"/>
      <div class="centent" v-html="html"></div>
    </div>
</template>


<script>
import {$apiCache} from '../../assets/script/api-cache'
import {onMounted,ref,watch} from 'vue'
import {useStore} from 'vuex'
export default { 
    setup(){
    const html = ref('')
    const store = useStore()

    watch(()=>store.state.lang,(newVal)=>{
      getAbout(newVal)
    })

    const getAbout = (lang)=>{
      $apiCache({key:'getAbout',type:2},{lang:lang}).then(res=>{
            html.value = res.data.content
        })
    }
     onMounted(()=>{
         getAbout(store.state.lang)
     })
     return {
         html
     }
    }
}
</script>

<style lang="less" scoped>

   .centent{
       padding:0 0.625rem;
   }
</style>