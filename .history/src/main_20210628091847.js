import { createApp } from 'vue';
import {
  ConfigProvider, Button, Form, Field, Col, Row, Icon, Step, Steps, Popup,
  Collapse,Tab, Tabs, CollapseItem,loading, Cell, Popover,Swipe,SwipeItem,Image,Lazyload
} from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import VanImg from './components/VanImg'
import TopTitle from './components/Toptitle'
import VueI18n from './assets/script/i18n';


createApp(App).use(Button).use(ConfigProvider).use(Form)
  .use(Step).use(Swipe).use(SwipeItem).use(Image).use(Lazyload)
  .use(Steps).use(loading)
  .use(Field).use(Tab).use(Tabs)
  .use(Popup)
  .use(Collapse)
  .use(CollapseItem)
  .use(Cell)
  .use(Popover)
  .use(Col)
  .use(Row)
  .use(Icon)
  .use(store)
  .use(router)
  .use(VueI18n).component("VanImg",VanImg).component('TopTitle',TopTitle)
  .mount('#app');
