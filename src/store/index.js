import { createStore } from 'vuex'
import Vuex from "vuex"
console.log("Vuex", Vuex)
import user from "./modules/user"
/* let storeObj = {}
console.log("require", require)

let files = require.context('./modules', true, /\.js$/)

files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    storeObj[newKey] = require(`./modules/${newKey}`).default;
}) */

export default createStore({
    //modules:storeObj
    modules:{
        user
    }
})