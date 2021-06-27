<template>

<van-image :width="width" :height="height" :radius="radius" :src="src">
    <template v-slot:loading>
        <van-loading type="spinner" size="60%" />
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