import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Music from '../views/Music.vue'
import Books from '../views/Books.vue'
import Chat from '../views/Chat.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   name:'List',
   component:List
 },
 {
  path:'/music',
  name:'Music',
  component:Music
},
{
  path:'/books',
  name:'Books',
  component:Books
},
{
  path:'/chat',
  name:'Chat',
  component:Chat
},
{
  path:'/details/:id',
  name:'Details',
  component:Details
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
