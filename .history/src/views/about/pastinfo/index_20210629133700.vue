<template>
    <div>
      <top-title>历届盛况</top-title>
      <!-- <div v-for="(c,index) in centent" :key="index" v-html="c.content" >

      </div> -->
      {{lang}}
      <div v-for="(c,index) in centent.data" :key="index" class="jiazi" :class="(index+1)%2 === 0 ?'fan':''" >
          <div><p>{{c.year}}</p></div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div>{{c.year+'.'+c.month}}<p style="font-size:0.75rem;" v-html="c.content"></p></div>
      </div>


      

    </div>
</template>

<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {onMounted,ref,watch,computed} from 'vue'
import {useStore} from 'vuex'
export default {
    setup(){
        const centent = ref([])
        const store = useStore()
        let lang = computed(()=>store.state.lang)

        // watch(()=>store.state.lang,(newVal)=>{
        //    getPastinfo(newVal)
        // })

     
        // const getPastinfo = (lang)=>{
        //     
        // }
        centent.value = computed(async()=>await $apiCache({key:'getPastinfo',type:2},{lang:lang}))
        // console.log(data)
        // onMounted(async ()=>{
        //   centent.value =  await  $apiCache({key:'getPastinfo',type:2},{lang:lang})
        //   console.log(centent.value)
        // })
    
        return{
            centent,
            lang
        }
    }
}
</script>

<style lang="less" scoped>
    .jiazi{
        height:8.25rem;
        width:100%;
        display: flex;
        justify-content: center;
        >div{
            display: flex;
            align-items: center;
        }
        >div:nth-of-type(1){
            width:calc(50% - 0.5625rem);
            padding:1.25rem;
            p{
               
                width:100%;
                text-align: right;
            }
        }
        >div:nth-of-type(2){
            width:1.125rem;
           
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: space-between;
            >div:nth-of-type(2){
               width:1.125rem;
               height:1.125rem;
               background:#1e6fff;
               border-radius: 0.9375rem;;
            }
            >div:nth-of-type(1),>div:nth-of-type(3){
                height:calc(50% - 0.875rem);
                border-left:0.0625rem solid #c8c9cc;
               
            }

        }
        >div:nth-of-type(3){
            padding:1.25rem;
            width:calc(50% - 0.5625rem);
            display: flex;
            flex-wrap: wrap;
        }
    }
    .fan{
        display: flex;
        flex-direction: row-reverse;
        >div:nth-of-type(1){
            p{
                text-align: left;
            }
        }
    }
</style>