<template>
<footer id="footer" :style="{ backgroundColor:curMenu.bgcolor}">
    <div v-for="obj in menu" :key="obj.path" @click="change(obj)">
        <router-link :to="obj.path">{{ obj.name }}</router-link>
    </div>
</footer>
</template>

<script>
import {
    mapMutations,
    mapState
} from "vuex";
export default {
    data() {
        return {
            menu: [{
                    path: "/",
                    name: "剧集",
                    bgcolor: "red",
                },
                {
                    path: "/music",
                    name: "音乐",
                    bgcolor: "pink",
                },
                {
                    path: "/books",
                    name: "书籍",
                    bgcolor: "green",
                },
                {
                    path: "/chat",
                    name: "聊天",
                    bgcolor: "yellow",
                },
            ],
        };
    },
    computed: {
        ...mapState(["curMenu"]),
    },
    methods: {
        ...mapMutations(["setcurMenu"]),
        change(obj) {
            this.setcurMenu(obj);
        },
    },
};
</script>

<style lang="scss" scoped>
#footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: red;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;

    .router-link-exact-active {
        color: #ffffff;
    }

    a {
        color: blue;
    }
}
</style>
