<template>
  <div>
    details
  
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {reactive} from 'vue'
export default {
   setup(){
     const route = useRoute()
     const state = reactive({
       id:route.query.id
     })
   }

}
</script>