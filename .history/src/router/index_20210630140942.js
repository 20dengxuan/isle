import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register'),
  }, {
    path: '/showroom',
    name: 'showroom',
    component: () => import('../views/showroom'),
  },{
    path:'/about',
    name:'about',
    component: () =>import('../views/about'),
  },{
    path:'/distribution',
    name:'distribution',
    component:()=>import('../views/about/distribution')
  },{
    path:'/pastinfo',
    name:'pastinfo',
    component:()=>import('../views/about/pastinfo')
  },{
    path:'/exhibits',
    name:'exhibits',
    component:()=>import('../views/exhibits'),
    meta:{
      nofooter:true
    }
  },{
    path:'/detail',
    name:'detail',
    component:()=>import('../views/exhibits/detail'),
    meta:{
      nofooter:true
    }
  },{
    path:'/directory-detail',
    name:'dirDetail',
    component:()=>import('../views/exhibits/directory-detail'),
    meta:{
      nofooter:true
    }
  },{
    path:'/exhibitor',
    name:'exhibitor',
    component:()=>import('../views/exhibitor'),
  },{
    path:'/conference',
    name:'conference',
    component:()=>import('../views/conference'),
    meta:{
      nofooter:true
    }
  },
  {
    path:'/investigate',
    name:'investigate',
    component:()=>import('../views/conference/investigate'),
    meta:{
      nofooter:true
    }
  }
  ,
  {
    path:'/news/detail',
    name:'detail/news',
    component:()=>import('../views/news/detail'),
    meta:{
      nofooter:true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  
  next()
})

export default router;
