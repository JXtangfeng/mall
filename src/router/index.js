import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home.vue') 
const categroy = () => import('../views/categroy/categroy.vue') 
const cart = () => import('../views/cart/cart.vue') 
const person = () => import('../views/person/person.vue') 

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect:'/home'
        },
        {
            path: '/home',
            component:home
        },
        {
            path: '/categroy',
            component:categroy
        },
        {
            path: '/cart',
            component:cart
        },
        {
            path: '/person',
            component:person
        }
    ],
    mode:'history'

})
export default router