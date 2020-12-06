<template>
<div>
    <aplayer :audio="audio" :lrcType="3" />
    <ul>
        <li id="firstline">
            <span class="order">编号</span>
            <span class="musicname">歌手名</span>
            <span class="musicpioneer">歌曲名</span>
        </li>
        <li id="firstline" v-for="(item,index) in musicmenu" :key="item.id" @click="getmusic(item.id)">
            <span class="order">{{index+1}}</span>
            <span class="musicname">{{item.name}}</span>
            <span class="musicpioneer">{{item.artist}}</span>
        </li>
    </ul>
</div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
    defaultCover: "https://github.com/u3u.png",
    productionTip: true,
});
export default {
    created() {
        this.getdata();
    },
    data() {
        return {
            musicmenu: [],
            audio: {
                name: "东西（Cover：林俊呈）",
                artist: "纳豆",
                url: "https://cdn.moefe.org/music/mp3/thing.mp3",
                cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
                lrc: "https://cdn.moefe.org/music/lrc/thing.lrc",
            },
        }
    },
    methods: {
        getdata() {
            let musicUrl = "https://bird.ioliu.cn/netease/playlist?id=5173283081";
            this.axios.get(musicUrl).then((res) => {
                console.log(res);
                this.musicmenu = res.data.playlist.tracks.map((item) => {
                    return {
                        id: item.id,
                        name: item.name,
                        artist: item.ar[0].name,
                    }
                })
            }).catch((error) => {
                console.log(error);
            })
        },
        getmusic(id) {
            let musicUrl = "https://bird.ioliu.cn/netease/song?id=" + id;
            let musicobj = {};
            this.axios
                .get(musicUrl)
                .then((res) => {
                    console.log(res);
                    musicobj = {
                        name: res.data.data.name,
                        artist: res.data.data.ar[0].name,
                        url: res.data.data.mp3.url,
                        cover: res.data.data.picUrl,
                    };
                    this.audio = musicobj;
                }).catch((error) => {
                    console.log(error);
                })
        }
    },
}
</script>

<style lang="scss" scoped>
#firstline {
    display: flex;
    margin: 15px;

    .order {
        flex: 1;
        color: blueviolet
    }

    .musicname {
        flex: 4;
        color: goldenrod;
    }

    .musicpioneer {
        flex: 2;
        color: burlywood
    }
}
</style>
