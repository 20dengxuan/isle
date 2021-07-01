<template>
  <div class="poput">
    <nav>更多筛选条件</nav>
   
    <div class="form">
       <!-- 分类 -->
      <p><span>1</span> 选择对应的产品类目</p>
      <div class="row">
           <van-field right-icon="arrow-down" :style="{width:'9.675rem', border:'0.0625rem solid #969696'}" placeholder="选择分类" @click="show.showCategory = true" readonly v-model="state.category" />
            <van-popup v-model:show="show.showCategory" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns" @cancel="show.showCategory = false" @confirm='onConfirm' />
            </van-popup>

            <van-field right-icon="arrow-down" :style="{width:'9.675rem', border:'0.0625rem solid #969696'}" placeholder="选择分类" @click="show.showCategory_son = true" readonly v-model="state.category_id" />
            <van-popup v-model:show="show.showCategory_son" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns_son" @cancel="show.showCategory_son = false" @confirm='onConfirm_son' />
            </van-popup>
      </div>
      <!-- 品牌 -->
      <p><span>2</span> 选择展品品牌</p>
      <div>
         <van-field right-icon="arrow-down" :style="{width:'17.125rem', border:'0.0625rem solid #969696'}" placeholder="选择分类" @click="show.showbrand = true" readonly v-model="state.brand_id" />
          <van-popup v-model:show="show.showbrand" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns_brand" @cancel="show.showbrand = false" @confirm='onConfirm_brand' />
         </van-popup>
      </div>
      <!-- 价格 -->
      <p><span>3</span> 选择参考价格区间</p>
      <div class="row">
         <van-field :style="{width:'9.625rem', border:'0.0625rem solid #969696'}"   v-model="form.price_start" />
           —
          <van-field :style="{width:'9.625rem', border:'0.0625rem solid #969696'}"   v-model="form.price_end" />
      </div>
    </div>
     <div class="button">
         <van-button @click="toSerah()" :style="{color:'white',width:'9.375rem',background:'#4279ff'}">搜索</van-button>
         <van-button @click="clear()"  :style="{color:'#4279ff',width:'9.375rem',border:'0.0625rem solid #4279ff'}">清空</van-button>
      </div>
    
  </div>
</template>

<script>
import {reactive,ref} from 'vue'
import {$apiCache} from '../../../assets/script/api-cache'
import {useStore} from 'vuex'
export default {
  emits:['toSearch'],
  setup(prop,context){
    const store = useStore()
    const show = reactive({
      showCategory:false,
      showCategory_son:false,
      showbrand:false
    })
    const form = reactive({
       page:0,
       page_size:16,
       category_id:'',
       brand_id:'',
       price_start:'0',
       price_end:'10000',
       lang:store.state.lang
    })
    const state = reactive({
      category:'',
      category_id:'',
      brand_id:''
    })
    //分类
    const columns = ref([]);
    const columns_son = ref([])
    const columns_brand = ref([])
    const getExhibitsCategory = ()=>{
      $apiCache({key:'getExhibitsCategory',type:2},{lang:app.$lang}).then(res=>{
        console.log(res)
        columns.value = res.data
      })
    }
    const customFieldName = {
      text:'name'
    }
    getExhibitsCategory()
    const onConfirm = (value) => {
       if(value.name !== state.category){
        form.category_id = ''
        state.category_id = ''
        form.brand_id = ''
        state.brand_id = ''
      }
      state.category = value.name;
      form.category_id = value.id
      columns_son.value = value.son
      show.showCategory = false;
     
     
      $apiCache({key:'getExhibitBrand',type:2},{lang:app.$lang,category_id:value.id}).then(res=>{
        columns_brand.value = res.data
      })
    };
     const onConfirm_son = (value) => {
       if(value.name !== state.category_id){
         form.brand_id = ''
         state.brand_id = ''
      }
      state.category_id = value.name
      form.category_id = value.id
      show.showCategory_son = false
      $apiCache({key:'getExhibitBrand',type:2},{lang:app.$lang,category_id:value.id}).then(res=>{
        columns_brand.value = res.data
      })
    };

    //品牌
     const onConfirm_brand = (value) => {
      state.brand_id = value.name
      form.brand_id = value.id
      show.showbrand = false
    };



    const toSerah =()=>{
       context.emit("toSearch",{form,state})
    }

    const clear = ()=>{
        columns_son.value = []
        columns_brand.value = []
        form.category_id = ''
        state.category_id = ''
        state.category = ''
        state.brand_id = ''
        form.brand_id = ''
        form.price_start = 0
        form.price_end = 10000
    }

   return {
     form,
     show,
     state,
     onConfirm,
     customFieldName,
     columns,
     columns_son,
     onConfirm_son,
     columns_brand,
     onConfirm_brand,
     toSerah,
     clear
   }
  }
}
</script>

<style lang="less" scoped>
  .poput{
    nav{
      height:3.375rem;
      line-height:3.375rem;
      text-align: center;
      color:white;
      background:#4279ff;
    }
    .form{
      padding:1rem; 
      p{
        margin-top:0.9375rem;
        font-size:0.8125rem;
        span{
          color:white;
          background:#4279ff;
          width:1.5rem;
          height:1.5rem;
          display: inline-block;
          text-align:center;
          line-height:1.5rem;
          border-radius:50%;
        }
      }  
      div{
        color:#969696;
         padding:0.625rem 1.25rem 0.625rem 1.5625rem;
      }
      .row{
        display: flex;
        justify-content: space-between;
        align-items:center;
      }
     
    }
     .button{
        padding:0.625rem 1.25rem;
        display: flex;
        justify-content: space-around;
      }
  }
</style> 