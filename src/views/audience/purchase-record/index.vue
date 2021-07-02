<template>
  <div>
    index
  </div>
</template>

<script>
import {$apiCache} from '../../../assets/script/api-cache'
export default {
  setup(){
    $apiCache({key:'getBuyingLeadList'},{page:1,page_size:12}).then(res=>{
      console.log(res)
    })
  }
}
</script>