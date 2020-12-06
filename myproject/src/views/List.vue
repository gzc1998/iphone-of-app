<template>
<div>
    <ul>
        <li class='allcontents' v-for="item in thelist" :key='item.id' @click="listjump(item.id)">
            <div id="photo">
                <img :src="'https://images.weserv.nl/?url='+item.cover.url" alt="">
            </div>
            <div id="Textcontent">
                <h3>{{item.title}}</h3>
                <p>{{item.info}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            thelist: [],
            start: 0,
        };
    },
    created() {
        this.getdata();
    },

    mounted() {
        this.listenscroll();
    },
    methods: {
        getdata() {
            let baseUrl = "https://bird.ioliu.cn/v2?url=";
            let tvUrl =
                `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10`;
            this.axios
                .get(baseUrl + tvUrl)
                .then((res) => {
                    console.log(res);
                    this.thelist = this.thelist.concat(res.data.subject_collection_items);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listenscroll() {
            let allhtmldom = document.documentElement;
            let deviceheight = allhtmldom.clientHeight;
            window.onscroll = () => {
                let fullHeight = allhtmldom.offsetHeight;
                let scrollheight = allhtmldom.scrollTop;
                if (scrollheight + deviceheight >= fullHeight - 20) {
                    this.start += 10;
                    if (this.start < 50) {
                        this.getdata();
                    }
                }
            }
        },
        listjump(id) {
            this.$router.push('/tvdetails/' + id);
        }

    },
};
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
