<template>
<header id="header" :style="{ backgroundColor:curMenu.bgcolor}">
    <span class="home" @click="gohome">首页</span>
    {{curMenu.name}}
</header>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex";
export default {
    computed: {
        ...mapState(['curMenu'])
    },
    methods: {
        ...mapMutations(["setcurMenu"]),
        gohome() {
            this.$router.push('/');
            this.setcurMenu({
                path: "/",
                name: "剧集",
                bgcolor: "red",
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    height: 1rem;
    background: red;
    line-height: 1rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;

    .home {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
