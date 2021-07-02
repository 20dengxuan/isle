<template>
  <div>
    <div class="login">
      {{ state }}
      <van-form @submit="onSubmit">
        <van-field
          v-model="state.email"
          name="email"
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
            ><span @click="getEmailCode()">点击发送</span>
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
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { $api } from '../../assets/script/api-cache';
// import { getSessionStorage } from '../../assets/script/utils';
import {useRouter,useRoute} from 'vue-router'
import {}

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
      $api()
        .fastLoginEmailCaptcha({
          email: state.email,
          ignore_img_captcha: 1,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      state,
      onSubmit,
      getEmailCode,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
