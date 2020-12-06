<template>
<div>
    <li class='allcontents' v-for="item in promList" :key="item.id" @click="jump_page(item.id)">
        <div id="photo"><img :src="'https://images.weserv.nl/?url='+item.cover.url" alt=""></div>
        <div id="Textcontent">
            <h3>{{item.title}}</h3>
            <p>{{item.info}}</p>
        </div>
    </li>
</div>
</template>

<script>
export default {
    mounted() {
        this.listenscroll();
    },
    created() {
        this.getdata();
    },
    data() {
        return {
            promList: [],
            start: 0
        }
    },
    methods: {
        getdata() {
            let listUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10`;
            let baseurl = "https://bird.ioliu.cn/v2?url=";
            this.axios.get(baseurl + listUrl).then((res) => {
                console.log(res);
                this.promList = this.promList.concat(res.data.subject_collection_items);
            }).catch((error) => {
                console.log(error);
            })
        },
        listenscroll() {
            let allhtml = document.documentElement;
            let deviceheight = allhtml.clientHeight;
            window.onscroll = () => {
                let fullHeight = allhtml.offsetHeight;
                let scrollheight = allhtml.scrollTop;
                if (scrollheight + deviceheight >= fullHeight - 20) {
                    this.start += 10;
                    if (this.start < 50) {
                        this.getdata();
                    }
                }
            }
        },
        jump_page(id) {
            this.$router.push('/details/' + id);
        }
    }
}
</script>

<style lang="scss" scoped>
.allcontents {
    display: flex;
    border-bottom: 2px solid coral;
    margin-top: 10px;

    #photo {
        flex: 3;

        img {
            width: 100%;
        }
    }

    #Textcontent {
        h3 {
            font-weight: bolder;
            margin-bottom: 20px;
        }

        flex: 5;
        padding: 10px;
    }
}
</style>
