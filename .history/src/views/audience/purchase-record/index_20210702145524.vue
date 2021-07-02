<template>
  <div>
    index
  </div>
</template>

<script>
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    $apiCache({key:'getBuyingLeadList'}).then(res=>{
      console.log(res)
    })
  }
}
</script>