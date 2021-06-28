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
