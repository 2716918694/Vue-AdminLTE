import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Register from '@/views/Register'
const Starter=resolve => require(['@/views/Starter'], resolve)

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    { 
      path: '/start',
      name: 'starter',
      component: Starter,
      meta:{
        needLogin: true,
      }
    }
  ]
})

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
//router.beforeEach((to, from, next) => {
  // if (to.path === '/login') {
  //   next();
  // } else {
  //   let token = localStorage.getItem('Authorization');
 
  //   if (token === 'null' || token === '') {
  //     next('/login');
  //   } else {
  //     next();
  //   }
  // }
//});

export default router;