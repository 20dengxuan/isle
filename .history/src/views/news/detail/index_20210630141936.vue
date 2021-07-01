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

    })

    


    onMounted(() => {
      
    })

  }
}
</script>