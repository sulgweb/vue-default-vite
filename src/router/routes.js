const routes = [
    {
        path:"/",
        redirect:"/index",
    },
    //index
    {
        path:"/index",
        component:()=>import("../pages/index/index.vue"),
    },
    //login
    {
        path:"/login",
        component:()=>import("../pages/login/index.vue")
    },
    //404
    {
        path:window.location.pathname,
        component:()=>import("../pages/404.vue")
    }
]

export default routes