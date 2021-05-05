import { createRouter, createWebHistory } from 'vue-router' 

import Main from "../components/Main.vue"
import Detail from "../components/Detail.vue"

const routerHistory = createWebHistory()

const routes = [
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        name: Main,
        component: Main
    },
    {
        path:'/detail/:drugId',
        name: 'Detail',
        component: Detail
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router