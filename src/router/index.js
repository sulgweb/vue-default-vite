//import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import routes from './routes'

/* const router = new VueRouter({
    mode: "hash",
    routes
}) */
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to,from,next)=>{
    //console.log("to,from,next", to,from,next)
    next()  
})

export default router