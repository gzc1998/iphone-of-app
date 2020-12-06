<template>
<div id="all" :style="{backgroundColor:curmenu.bgcolor}">
    <span class="first_page" @click="backtofirstpage">首页</span>
    {{curmenu.name}}
</div>
</template>

<script>
import {
    mapMutations,
    mapState
} from 'vuex'
export default {
    computed: {
        ...mapState(["curmenu"]),
    },
    methods: {
        ...mapMutations(["changecurmenu"]),
        backtofirstpage() {
            this.$router.push('/');
            this.changecurmenu({
                path: '/',
                name: '剧集',
                bgcolor: 'red'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#all {
    height: 1rem;
    background: red;
    text-align: center;
    line-height: 1rem;

    .first_page {
        position: absolute;
        left: 0px;
        top: 0px
    }
}
</style>
