import { createStore } from 'vuex';
import { setSessionStorage, getSessionStorage } from '../assets/script/utils';
import i18n from '../assets/script/i18n'


export default createStore({
  state: {
    signinInfos: getSessionStorage('SIGNININFOS') || {},
    isSignIn: !!getSessionStorage('SIGNININFOS'),
    lang: 'zh',
  },
  mutations: {
    SET_SIGNIN(state, data) {
      state.signinInfos = data;
      const isSignIn = state.isSignIn = !!data?.token;
      state.isSignIn = isSignIn
      if (!isSignIn) return;
     
      setSessionStorage('SIGNININFOS', data);
    },

    SET_LANG(state, data) {
      state.lang = data;
      i18n.global.locale = data;
      app.$lang = data
    },

  },
  actions: {
    SET_SIGNIN(ctx, data) {
      ctx.commit('SET_SIGNIN', data);
    },
    SET_LANG(ctx, data) {
      ctx.commit('SET_LANG', data);
    },
  },
  modules: {
  },
});
