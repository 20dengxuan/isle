<template>
  <van-config-provider :theme-vars="themeVars">
    <header-nav></header-nav>
    <div style="height:3.375rem"></div>
   <router-view v-slot="{ Component }">
    <keep-alive exclude="detail,dirdetail,exhibits," >
      <component :is="Component" />
    </keep-alive>
  
  </router-view> 




    <Footer v-if="!$route.meta.nofooter" ></Footer>
  </van-config-provider>
</template>

<script>
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer'

export default {
  components: { HeaderNav ,Footer},
  setup() {
    

    const themeVars = {
      // FieldLabelMarginRight: '0.625rem',
      // FieldLabelWidth: '1rem',
      // CellFontSize:'',
      // CellVerticalPadding:'0.5rem'
     CellLineHeight:'1.5rem',
     TabActiveTextColor:'rgb(30, 111, 255)',
     TabsBottomBarColor:'rgb(30, 111, 255)',
      TabsLineHeight: '2.75rem',
        TabLineHeight: '2.75rem'
    };
    return {
      themeVars
    };
  },
  mounted() {
    (function (doc, win) {
      const docEl = win.document.documentElement;
      const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

      const refreshRem = function () {
        const clientWidth = win.innerWidth
                      || doc.documentElement.clientWidth
                      || doc.body.clientWidth;

        // console.log(clientWidth)
        if (!clientWidth) return;
        let fz;
        const width = clientWidth;
        fz = 16 * width / 375;
        docEl.style.fontSize = `${fz}px`;// 这样每一份也是16px,即1rem=16px
      };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, refreshRem, false);
      doc.addEventListener('DOMContentLoaded', refreshRem, false);
      refreshRem();
    }(document, window));
  },
};
</script>

<style lang="less">
body,html{
  width:100%;
  
}
* {
  // font-size: 1rem;
  box-sizing: border-box;
  font-size:1rem;
  // transition:all .3s ;
}
.detail{
  img{
    width:100%;
  }
}
p{
  margin:0;
  a{
    font-size:0.75rem;
  }
}
.popover{
  width:5.625rem !important;
  .van-popover__action{
  padding:0 0!important;
  width:100%;
}
}
.van-list__finished-text,.van-list__placeholder{
  width:100%;
}
.newdetail{
  .rich_pages{
     width:100%;
  }
  img{
    width:100%;
  }
}
</style>
