<template>
<div>
    <h1>{{tvobj.title}}</h1>
    <p>{{tvobj.intro}}</p>
    <img :src="'https://images.weserv.nl/?url=' + tvobj.cover.image.small.url" alt="">
</div>
</template>

<script>
export default {
    created() {
        this.getdata();
    },
    data() {
        return {
            tvobj: {}
        }
    },
    methods: {
        getdata() {
            let baseUrl = "https://bird.ioliu.cn/v2?url=";
            let tvUrl = "https://m.douban.com/rexxar/api/v2/tv/" + this.$route.params.id;
            this.axios.get(baseUrl + tvUrl).then((res) => {
                console.log(res);
                this.tvobj = res.data;
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}

img {
    width: 100%;
}
</style>
