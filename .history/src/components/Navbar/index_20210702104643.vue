<template>
  <div class="tab">
    <header>
       <div v-if="state.isSignIn">
           <span  class="van-ellipsis">早上好,{{state.signinInfos.email}}</span><span> <van-icon name="arrow" />退出</span>
       </div>

       <div v-else>
         <button>登记注册</button>
       </div>
    </header>
    <div style="height:3.75rem"></div>
    <div class="center">
        <van-collapse  v-model="activeNames" accordion>
          <div v-for="(n,index) in navs" :key="index">
             <div v-if="n.children.length === 1">
                 <van-cell @click="changRouter(n.children[0].name)" >
                  
                     
                     

              
                   <template v-slot:title>
                     <span style="font-size:0.875rem"><van-icon :name="n.icon" /> {{n.title}}</span>
                   </template>
                 </van-cell>
             </div>
             <div v-else>
               <van-collapse-item   :name="`${index}`">
                

                  

               
                 <template v-slot:title>
                     <span :style="activeNames == index?'color:#1e6fff':''" style="font-size:0.875rem;"><van-icon :name="n.icon" /> {{n.title}}</span>
                 </template>
                 <template v-slot:right-icon>
                     <van-icon size="0.875rem" name="arrow-down" />
                 </template>
                 <van-cell  @click="changRouter(c.name)" v-for="(c,i) in n.children" :key="i" >
                    <template v-slot:title>
                     <span :style="activeNames == index?'color:#1e6fff':''" style="font-size:0.75rem">&nbsp;&nbsp;{{c.title}}</span>
                   </template>
                 </van-cell>
               </van-collapse-item>
             </div>
          </div>

        </van-collapse>

    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {
  reactive, ref, computed, defineComponent,
} from 'vue';
import { useRouter } from 'vue-router';
import i18n from '../../assets/script/i18n';

export default defineComponent({
  emits: {
    c: null,
  },
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      isSignIn: false,
      signinInfos: {},
    });
    state.isSignIn = store.state.isSignIn;
    state.signinInfos = store.state.signinInfos;

    const activeNames = ref('0');

    const changRouter = (name) => {
      context.emit('c');
      if(name === 'index'){
        activeNames.value = '0'
        router.push('/')
        return
      } 
      name = name.replace(/-/g,'/')
      console.log(name)   
      router.push(name);
    };

    const navs = computed(() => {
      const navList = [
        {
          title: i18n.global.t('menu.home'),
          icon:'home-o',
          children: [
            {
              title: i18n.global.t('menu.home'),
              name: 'index',
            },
          ],
        },
        {
          title: i18n.global.t('menu.showroom'),
          icon:'cashier-o',
          children: [
            {
              title: i18n.global.t('menu.showroom'),
              name: 'showroom',
            },
            {
              title: i18n.global.t('menu.allexhibits'),
              name: 'exhibits',
            },
          ],
        },
        {
          title: i18n.global.t('menu.about'),
          icon:'bulb-o',
          children: [
            {
              title: i18n.global.t('menu.overview'),
              name: 'about',
            },
            {
              title: i18n.global.t('menu.distribution'),
              name: 'about-distribution',
            },
            {
              title: i18n.global.t('menu.pastinfo'),
              name: 'about-pastinfo',
            },
          ],
        },
        {
          title: i18n.global.t('menu.buyer'),
          icon:'records',
          children: [
            {
              title: i18n.global.t('menu.audience'),
              name: 'audience-register',
            },
            {
              title: i18n.global.t('menu.policy'),
              name: 'audience-policy',
            },
            {
              title: i18n.global.t('menu.guide'),
              name: 'audience-guide',
            },
            {
              title: i18n.global.t('menu.directory'),
              name: 'exhibitor-directory',
            },
            {
              title: i18n.global.t('menu.lead'),
              name: 'audience-purchase',
            },
            {
              title: i18n.global.t('menu.purchaseRecord'),
              name: 'audience-purchase-record',
            },
            {
              title: i18n.global.t('menu.inquiryRecord'),
              name: 'exhibits-inquiry-record',
            },
          ],
          other: {
            title: i18n.global.t('menu.register'),
            name: 'audience-register',
          },
        },
        {
          title: i18n.global.t('menu.exhibitor'),
          icon:'user-o',
          children: [
            {
              title: i18n.global.t('menu.why'),
              name: 'exhibitor',
            },
            {
              title: i18n.global.t('menu.booth'),
              name: 'exhibitor-register',
            },
            {
              title: i18n.global.t('menu.aniu'),
              link: 'http://www.aniuled.com',
            },
          ],
        },
        {
          title: i18n.global.t('menu.newsc'),
          icon:'newspaper-o',
          children: [
            {
              title: i18n.global.t('menu.live'),
              name: 'media-live',
            },
            {
              title: i18n.global.t('menu.news'),
              name: 'news',
            },
            {
              title: i18n.global.t('menu.spread'),
              name: 'news-spread',
            },
            {
              title: i18n.global.t('title.enterprises'),
              name: 'news-enterprises',
            },
            {
              title: i18n.global.t('menu.industry'),
              name: 'news-industry',
            },
            {
              title: i18n.global.t('menu.download'),
              name: 'download',
            },
          ],
        },
        {
          title: i18n.global.t('menu.conference'),
          icon:'notes-o',
          name: 'conference',
          children: [
            {
              title: i18n.global.t('menu.forum'),
              name: 'conference',
            },
            {
              title: i18n.global.t('menu.investigate'),
              name: 'conference-investigate',
            },
          ],
        },
        {
          title: i18n.global.t('menu.info'),
          icon:'logistics',
          children: [
            {
              title: i18n.global.t('menu.goto'),
              name: 'service',
              query: {
                tab: '1',
              },
            },
            {
              title: i18n.global.t('menu.visa'),
              name: 'service',
              query: {
                tab: '2',
              },
            },
            {
              title: i18n.global.t('menu.hotel'),
              name: 'service',
              query: {
                tab: '3',
              },
            },
            {
              title: i18n.global.t('menu.preferential'),
              name: 'service',
              query: { tab: '4' },
            },
          ],
        },
      ];
      return navList.map((item) => {
        item.children = item.children ? item.children.filter((child) => !!child.title) : [];
        return item;
      });
    });
    console.log(navs);

    return {
      state,
      activeNames,
      navs,
      changRouter,
    };
  },
});
</script>

<style lang="less" scoped>
  .tab{
    height:100%;
    overflow: scroll;
    header{
      height:3.75rem;
      background:url('http://image-dev.3-e.cn/editor/5694416a03ed49f3a5b2d646b4556ec6.png');
      background-size:100% 100%;
      padding:0 1.25rem;
      display: flex;
      align-items: center;
      position:fixed;
      width:100%;
      top:0;
      z-index:9;
      >div{
        color:white;
        >span:nth-of-type(1){
          width:160px;
          display: inline-block;
          overflow: hidden;
        }
        >span:nth-of-type(2){
          
        }
        >button{
          height:1.625rem;
          font-size:0.75rem;
          border:0.0625rem solid #9ff;
          background:hsla(0,0%,100%,.13);
          padding:0.25rem 0.625rem;
          border-radius: 0.25rem;

        }
      }
    }
  }
</style>
