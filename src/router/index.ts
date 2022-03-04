import {createWebHistory, createRouter, RouteRecordRaw} from "vue-router"
import Search from "../views/Search.vue"
import SearchDetail from "../views/SearchDetail.vue"
import SearchDetailSummary from "../views/SearchDetailSummary.vue"
import SearchDetailChart from "../views/SearchDetailChart.vue"
import PageNotFound from '../views/PageNotFound.vue'

const routes: RouteRecordRaw[] = [
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/search/:symbol",
        name: "SearchDetail",
        component: SearchDetail,
        props: true,
        children: [
            {
                path: "summary",
                name: "SearchDetailSummary",
                component: SearchDetailSummary,
            },
            {
                path: "chart",
                name: "SearchDetailChart",
                component: SearchDetailChart,
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