<template>

<van-image :width="width" :height="height" :radius="radius" :src="src">
    <template v-slot:loading>
       <img style="text-align:center" src="./loding.gif"/>
    </template>
</van-image>

    
    
</template>


<script>
export default {
    props:{
        height:{
            type:String,
            default:'',    
        },
        width:{
             type:String,
            default:''
        },
        src:{
             type:String,
             default:''
        },
        radius:{
            type:String,
            default:''
        }
    }
}
</script>