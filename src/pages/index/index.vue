<template>
    <div style="width:100px;height:100px">
        <div>index test</div>
        <a-button type="primary">Primary</a-button>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    name:"index",
    computed:{
        ...mapState({})
    }
}
</script>