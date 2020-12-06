<template>
<div>
    <h2>{{promObject.title}}</h2>
    <p>{{promObject.intro}}</p>
    <img :src="'https://images.weserv.nl/?url=' +  promObject.cover.image.small.url" alt="">
</div>
</template>

<script>
export default {
    created() {
        this.getdata();
    },
    data() {
        return {
            promObject: {},
        }
    },
    methods: {
        getdata() {
            let baseUrl = "https://bird.ioliu.cn/v2?url=";
            let tvUrl = "https://m.douban.com/rexxar/api/v2/tv/" + this.$route.params.id;
            this.axios.get(baseUrl + tvUrl).then((res) => {
                console.log(res);
                this.promObject = res.data;
            }).catch((error) => {
                console.log(error);
            })
        }

    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}

h2 {
    text-align: center;
}

p {
    font-weight: 400;
}
</style>
