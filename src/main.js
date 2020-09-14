import { createApp, h } from 'vue'
import Antd from 'ant-design-vue';
console.log("Antd", Antd)
import 'ant-design-vue/dist/antd.css';
import router from "./router"
import store from "./store"
//console.log("store", store)
//console.log("router", router)

import App from './App.vue'
import './index.css'

/* const App = ({
    data:()=>({
        currentRoute: window.location.pathname
    }),

    computed: {
        ViewComponent(){
            const matchingPage = route[this.currentRoute] || '404'
            return require(`./pages/${matchingPage}`).default
        }
    },

    render(h) {
        return h(this.ViewComponent)
    },
    
    created() {
        window.addEventListener('popstate',()=>{
            this.currentRoute = window.location.pathname
        })
    },
}) */
const app = createApp(App)
app.use(Antd).use(router).use(store).mount('#app')

