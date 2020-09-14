<template>
    <div style="width:100px;height:100px">
        <div>login test</div>
    </div>
</template>

<script>
import {useStore,mapState,mapActions,mapMutations,mapGetters} from "vuex"
import { computed } from 'vue'
export default {
    name:"login",
    setup(){
        const store = useStore()
        const currentUser = computed(() => store.state.user.currentUser)
        return{
            currentUser
        }
    },
    mounted(){
        console.log(this.currentUser)
        this.updateCurrentUser({id:"6666666"})
        console.log(this.currentUser)
        this.updateCurrentUser({id:"7777"})
        console.log(this.getCurrentUser())
    },
    methods:{
        ...mapActions(["updateCurrentUser"]),
        ...mapMutations(["setCurrentUser"]),
        ...mapGetters(["getCurrentUser"]),
    }
}
</script>