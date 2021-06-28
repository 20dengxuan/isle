<template>
  <div>
    details
  
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
   setup(){
     const route = useRoute()
     console.log(route.query.id)
   }

}
</script>