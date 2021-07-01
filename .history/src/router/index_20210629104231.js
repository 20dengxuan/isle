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
  },{
    path:'/detail',
    name:'detail',
    component:()=>import('../views/exhibits/detail')
  },{
    path:'/directory-detail',
    name:'dirDetail',
    component:()=>import('../views/exhibits/directory-detail')
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
