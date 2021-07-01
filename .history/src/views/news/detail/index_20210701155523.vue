<template>
  <div class="newdetail">
    <div v-if="NoNews">
      <img src="https://image-dev.3-e.cn/image/d257c9228f124b6bb512e78670493eea.png" />
      <p></p>
      <p>{{time}}</p>
      <van-button>跳转</van-button>
    </div>
    <top-title v-if="state.content" >{{state.title}}</top-title>
    <div class="content" v-html="state?.content"></div>
  </div>
</template>


<script>
import {useRoute,useRouter} from 'vue-router'
import {watch,onMounted,reactive,ref} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  name:'detail/news',
  setup(){
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

   const state = reactive({
     content:'',
     title:''
   })
   const NoNews = ref(false)
   const time = ref(5)
   
    watch(()=>store.state.lang,(newVal)=>{
        getNewsById(newVal)
    })

    const getNewsById = (lang)=>{
      $apiCache({key:'getNewsById'},{relate_id:route.query.id,lang:lang}).then(res=>{
        if(res.data === null){
          NoNews.value = true
         let Interval= setInterval(()=>{
            time.value--
            if(time.value === 0 || time.value<0){
              clearInterval(Interval)
              router.push({name:'news'})
            }
          },1000)
        }else{
          NoNews.value = false
        }
        state.content = res.data?.content
        state.title = res.data?.title
        // .replace(/!important/g,'')
      })
    }

     

    onMounted(() => {
      getNewsById(store.state.lang)
    })

    return{
      state,
      NoNews,time
    }
  }
}
</script>


<style lang="less" scoped>
  .newdetail{
    width:100%;
    
  }
</style>