import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'*/
import BookManage  from '../views/BookManage.vue'
import AddBook from '../views/AddBook.vue'
import  UpdateBook from '../views/UpdateBook.vue'
import  Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
  {
    path: '/',
    name: '图书管理',
    component: Index,
    redirect: '/bookManage',
    show: true,
    children:[
      {
        path: '/bookManage',
        name: '图书查询',
        component: BookManage
      },
      {
        path: '/addBook',
        name: '图书增加',
        component: AddBook
      }
    ]
  },
  {
    path:'/update',
    component: UpdateBook,
    show: false


  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
