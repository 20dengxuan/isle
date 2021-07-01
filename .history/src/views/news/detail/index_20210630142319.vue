<template>
  <div>
    detail
  </div>
</template>


<script>
import {useRoute} from 'vue-router'
import {watch,onMounted,reactive} from 'vue'
import {useStore} from 'vuex'
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    const store = useStore()
    const route = useRoute()

    watch(()=>store.state.lang,(newVal)=>{
        getNewsById(newVal)
    })

    const getNewsById = (lang)=>{
      $apiCache({key:'getNewsById'},{relate_id:route.query.id,lang:lang}).then(res=>{
        console.log(res)
      })
    }


    onMounted(() => {
      getNewsById(store.state.lang)
    })

  }
}
</script>