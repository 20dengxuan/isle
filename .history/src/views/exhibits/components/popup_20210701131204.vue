<template>
  <div class="poput">
    <nav>更多筛选条件</nav>
    {{form}}
   
    <div class="form">
       <!-- 分类 -->
      <p><span>1</span>选择对应的产品类目</p>
      <div class="row">
           <van-field right-icon="arrow-down" :style="{width:'158px', border:'1px solid #969696'}" placeholder="选择分类" @click="show.showCategory = true" readonly v-model="state.category" />
            <van-popup v-model:show="show.showCategory" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns" @cancel="show.showCategory = false" @confirm='onConfirm' />
            </van-popup>

            <van-field right-icon="arrow-down" :style="{width:'158px', border:'1px solid #969696'}" placeholder="选择分类" @click="show.showCategory_son = true" readonly v-model="state.category_id" />
            <van-popup v-model:show="show.showCategory_son" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns_son" @cancel="show.showCategory_son = false" @confirm='onConfirm_son' />
            </van-popup>
      </div>
      <!-- 品牌 -->
      <p><span>2</span>选择展品品牌</p>
      <div>
         <van-field right-icon="arrow-down" :style="{width:'274px', border:'1px solid #969696'}" placeholder="选择分类" @click="show.showbrand = true" readonly v-model="state.brand_id" />
          <van-popup v-model:show="show.showbrand" round position="bottom" >
                <van-picker :columns-field-names="customFieldName" :columns="columns_brand" @cancel="show.showbrand = false" @confirm='onConfirm_brand' />
         </van-popup>
      </div>
      <!-- 价格 -->
      <p><span>3</span>选择参考价格区间</p>
      <div class="row">
         <van-field :style="{width:'154px', border:'1px solid #969696'}"   v-model="form.price_start" />
           —
          <van-field :style="{width:'154px', border:'1px solid #969696'}"   v-model="form.price_end" />
      </div>
    </div>
     <div class="button">
         <van-button @click="toSerah()" :style="{width:'150px'}">搜索</van-button>
         <van-button :style="{width:'150px'}">清空</van-button>
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
       context.emit("toSearch",form)
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
     toSerah
   }
  }
}
</script>

<style lang="less" scoped>
  .poput{
    nav{
      height:54px;
      line-height:54px;
      text-align: center;
      color:white;
      background:#4279ff;
    }
    .form{
      padding:16px; 
      p{
        span{
          color:white;
          background:#4279ff;
          width:24px;
          height:24px;
          display: inline-block;
          text-align:center;
          line-height:24px;
          border-radius:50%;
        }
      }  
      div{
        color:#969696;
         padding:10px 20px 10px 30px;
      }
      .row{
        display: flex;
        justify-content: space-between;
        align-items:center;
      }
     
    }
     .button{
        display: flex;
        justify-content: space-around;
      }
  }
</style> 