<template>
<van-config-provider :theme-vars="themeVars">
  <div>
    <div class="login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.email"
          name="email"
          type="email"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        >
          <template v-slot:label>
            <van-icon size="1rem" name="phone-o" />
          </template>
        </van-field>
        <van-field
          v-model="state.email_captcha"
          name="email_captcha"
          placeholder="*验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template v-slot:button
            ><span @click="getEmailCode()">{{items?items+'s':'点击发送'}}</span>
          </template>
          <template v-slot:label>
            <van-icon size="1rem" name="phone-o" />
           
          </template>
        </van-field>

        <div style="margin: 1rem">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</van-config-provider>
</template>

<script>
import { reactive,ref} from 'vue';
import { useStore } from 'vuex';
import { $api } from '../../assets/script/api-cache';
// import { getSessionStorage } from '../../assets/script/utils';
import {useRouter,useRoute} from 'vue-router'
import {Toast} from 'vant'
 
export default {
  setup() {
    const store = useStore();
    const router = useRouter()
    const route = useRoute()
    console.log(store);
    const state = reactive({
      email: '',
      email_captcha: '',
    });

    const items = ref(0)

 console.log(route.query.redirect)
    // 登录
    const onSubmit = async (values) => {
      console.log(values);
      values.register_channel = 7
      const {code,data,msg} =await $apiCache({key:'fastLoginLogin',type:1},values)
      if(!code){
          store.commit('SET_SIGNIN', data);
          if(route.query.redirect){
            router.push({path:route.query.redirect})
          }else{
            router.push({path:'/'})
          }
      }
      // const { data, code } = getSessionStorage('FASTLOGINLOGIN');
      // console.log(data);
      // if (!code) {
      //   store.commit('SET_SIGNIN', data);
      // }
    };

    // 获取邮箱验证码
    const getEmailCode = () => {
      if(!state.email){
        Toast('请输入邮箱')
        return
      }
      if(!items.value){
         items.value = 50
        $api()
        .fastLoginEmailCaptcha({
          email: state.email,
          ignore_img_captcha: 1,
        })
        .then((res) => {
          Toast("验证码已发送请注意查收")
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
       const inter = setInterval(() => {
          items.value--
          if(items.value<=0){
            clearInterval(inter)
            items.value = 0
          } 
        }, 1000);
      }else{
         return
      }
    }; 


     const themeVars = {
      FieldLabelWidth: '1rem',
     }

    return {
      state,
      onSubmit,
      getEmailCode,
      items,
      themeVars
    };
  },
};
</script>

<style lang="less" scoped>
 @font-face {
  font-family: 'iconfont';  /* Project id 2647896 */
  src: url('//at.alicdn.com/t/font_2647896_8r7xg1y8ygj.woff2?t=1625212522435') format('woff2'),
       url('//at.alicdn.com/t/font_2647896_8r7xg1y8ygj.woff?t=1625212522435') format('woff'),
       url('//at.alicdn.com/t/font_2647896_8r7xg1y8ygj.ttf?t=1625212522435') format('truetype');
}

</style>
