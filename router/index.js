import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// @的意思是锁定根目录：src目录

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Mine from "../pages/Mine"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

Vue.use(Router)

export default function(){
  const router = new Router({
    routes: [
      {
        path:'/',
        redirect:'/home'
      },
      {
        path: '/home',
        component:Home
      },
      {
        path:'/shop',
        component:Shop
      },
      {
        path:'/mine',
        component:Mine,
        meta:{
          isLogin:true
        }
      },
      {
        path:'/login',
        component:Login
      },
      {
        path:'*',
        component:NotFound
      },
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.isLogin)){
        // 是否登录过
        
        const token = localStorage.getItem("token")
        // 读取本都token
        if(token){
            next();
        }else{
            next({
                path:"/login"
            })
        }
        
    }else{
        next()
    }
})

  return router
}
