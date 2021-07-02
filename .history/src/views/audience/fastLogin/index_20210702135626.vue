<template>
  <div>
    <top-title>采购意向</top-title>

    {{form}}
    <van-form @failed="onFailed">

       <!-- 姓名 -->
       <p><span>*</span>您的姓名</p>
       <van-field v-model="form.name" name="name" 
       placeholder="请输入"
       :rules="[{required:true,message:'必须填写姓名'}]"
       /> 

        <!-- 国家 -->
       <p><span>*</span>你所在的国家</p>
       <van-field @click="state.isShowCountry = true" v-model="state.country" right-icon="arrow-down" />
       <van-popup v-model:show="state.isShowCountry" position="bottom">
          <van-picker
            :columns="state.columns_list"
            @confirm="onConfirm_country"
            @cancel="state.isShowCountry = false"
            :columns-field-names="customFieldName"
          />
        </van-popup>

       <!-- 手机 -->
       <p><span>*</span>手机号码</p>
       <van-field type="tel" v-model="form.cellphone" name="cellphone" 
       placeholder="请输入"
       /> 

       <!-- 邮箱 -->
      <p><span>*</span>邮箱</p>
       <van-field type="email" v-model="form.email" name="email" 
       placeholder="请输入"
       />

       <!-- 行业 -->
       <p><span>*</span>你所处行业</p>
       <van-field placeholder="请选择" @click="state.isShowIndustry= true" v-model="state.industry" right-icon="arrow-down" />
       <van-popup v-model:show="state.isShowIndustry" position="bottom">
          <van-picker
            :columns="state.industry_list"
            @confirm="onConfirm_industry"
            @cancel="state.isShowIndustry= false"
            :columns-field-names="customFieldName"
          />
       </van-popup>

       <!-- 分类 -->
        <p><span>*</span>采购商品所属类目</p>
        <van-field placeholder="请选择" @click="state.isShowCategory= true" v-model="state.category" right-icon="arrow-down" />
        <van-popup v-model:show="state.isShowCategory" position="bottom">
          <van-picker
            :columns="state.category_list"
            @confirm="onConfirm_category"
            @cancel="state.isShowCategory = false"
            :columns-field-names="customFieldName_cagetory"
          />
       </van-popup>
       
       


    </van-form>
    <!-- //image-dev.3-e.cn/editor/9b05959f1655408294aa5b2aa5376711.png -->
  </div>
</template>


<script>
import {$apiCache} from '../../../assets/script/api-cache'
import {reactive} from 'vue'
export default {
  setup(){
    const form = reactive({
    category_id: 2,
    cellphone: "17534643678",
    cellphone_prefix: "86",
    content: "hhhhhhh",
    country_code: "EG",
    email: "20001114@qq.com",
    industry_id: 367,
    name: "hh",
    })


    const state = reactive({
      isShowCountry:false,
      country_list:'',
      country:'',

      isShowIndustry:false,
      industry_list:'',
      industry:'',

      isShowCategory:false,
      category_list:'',
      category:'',

    })

    //地区
    $apiCache({key:'countrySelection'}).then(res=>{
      state.columns_list = res.data
      console.log(state.columns_list)
    })
    const onConfirm_country = (value)=>{
      state.country = value.name
      form.country_code = value.iso_code
      state.isShowCountry = false
    }


    //行业
   $apiCache({key:'industrySelection'}).then(res=>{
     state.industry_list = res.data
   })
   const onConfirm_industry = (value) =>{
     state.industry = value.name
     form.industry_id = value.id
     state.isShowIndustry = false
   }
   

    //分类
   $apiCache({key:'categorySelection'}).then(res=>{
     state.category_list = res.data
   })
   const onConfirm_category = (value) =>{
     state.category = value[0].name + '/' +value[1].name
     form.category_id = value[1].id
     state.isShowCategory = false
    console.log(value)
   }



    
     const customFieldName = {
      text: 'name',
    };

     const customFieldName_cagetory = {
      text: 'name',
      children:'son'
    };

    const onFailed = (values) =>{
      console.log(values)
      // $apiCache({key:'submitIntention'},form).then(res=>{
      //     console.log(res)
      // })
    }

    return {
      form,
      state,
      onConfirm_country,
      onConfirm_industry,
      onConfirm_category,
      onFailed,
      customFieldName,
      customFieldName_cagetory
    }
  }
}
</script>