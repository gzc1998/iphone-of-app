<template>
<footer id="all" :style="{backgroundColor:curmenu.bgcolor}">
    <li class="page_control" v-for="item in controllist" :key="item.path" @click="change_page(item)">
        <router-link :to="item.path">{{item.name}}</router-link>
    </li>
</footer>
</template>

<script>
import {
    mapMutations,
    mapState
} from 'vuex'
export default {
    data() {
        return {
            controllist: [{
                path: '/',
                name: '剧集',
                bgcolor: 'red'
            }, {
                path: '/music',
                name: '音乐',
                bgcolor: 'blue'
            }, {
                path: '/books',
                name: '书籍',
                bgcolor: 'green'
            }, {
                path: '/chat',
                name: '聊天',
                bgcolor: 'purple'
            }]
        }
    },
    computed: {
        ...mapState(["curmenu"]),
    },
    methods: {
        ...mapMutations(["changecurmenu"]),
        change_page(obj) {
            this.changecurmenu(obj);
        }
    }
}
</script>

<style lang="scss" scoped>
#all {
    display: flex;
    justify-content: space-around;
    height: 1rem;
    background: red;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    a {
        text-decoration: none;
        color: black;
    }

    .page_control {
        margin-top: 10px;
    }
}
</style>
