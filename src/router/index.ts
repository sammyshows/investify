import {createWebHistory, createRouter, RouteRecordRaw} from "vue-router"
import Home from "../views/Home.vue"
import About from '../views/About.vue'
import AirportDetail from '../views/AirportDetail.vue'
import AirportDestinations from '@/views/AirportDestinations.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/airport/:code",
        name: "AirportDetail",
        component: AirportDetail,
        children: [
            {
                path: 'destinations',
                name: 'AirportDestinations',
                component: AirportDestinations
            }
        ]
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router