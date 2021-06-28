<template>

<van-image :width="width" :height="height" :radius="radius" :src="src">
    <template v-slot:loading>
        <div style="height:100%;width:100%; display: flex;
        justify-content: center;">
           <img style="height:100%;width:100%;" src="./loding.gif"/>
        </div>   
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

<style lang="">
    div{
       
    }
</style>