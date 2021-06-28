<template>

<van-image :width="width" :height="height" :radius="radius" :src="src">
    <template style="text-align:center" v-slot:loading>
       <img  src="./loding.gif"/>
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