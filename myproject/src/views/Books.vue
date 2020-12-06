<template>
<div class="carousel" v-loading.fullscreen="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.4)">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in madengList" :key="item">
            <img :src="'https://images.weserv.nl/?url=' + item" alt="" />
        </el-carousel-item>
    </el-carousel>
    <div>
        <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="虚构类" name="fiction">
                <div class="bookstate">
                    <el-row v-for="item in bookstatelist" :key="item.id">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt="" />
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <div class="content">
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.info }}</p>
                                </div>
                                <div>
                                    <el-rate :value="rat(item.rating.value)" disabled show-score text-color="#ff9900" score-template="{value}">
                                    </el-rate>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="非虚构类" name="nonfiction">
                <div class="bookstate">
                    <el-row v-for="item in bookstatelist" :key="item.id">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt="" />
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple-light">
                                <div class="content">
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.info }}</p>
                                    <div>
                                        <el-rate :value="rat(item.rating.value)" disabled show-score text-color="#ff9900" score-template="{value}">
                                        </el-rate>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            madengList: [],
            activeName: "fiction",
            bookstatelist: [],
            loading: false,
        };
    },
    created() {
        this.getdata();
    },
    methods: {
        getdata() {
            this.loading = true;
            let baseUrl = "https://bird.ioliu.cn/v2?url=";
            let booksUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=0&count=8`;
            this.axios
                .get(baseUrl + booksUrl)
                .then((res) => {
                    console.log(res);
                    this.madengList = res.data.subject_collection_items.map((item) => {
                        return item.cover.url;
                    });
                    this.bookstatelist = res.data.subject_collection_items;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleClick() {
            this.getdata();
        },
        rat(ratnumber) {
            ratnumber = ratnumber / 2;
            ratnumber = ratnumber * 10;
            ratnumber = Math.trunc(ratnumber);
            ratnumber /= 10;
            return ratnumber;
        }
    },
};
</script>

<style lang="scss" scoped>
.carousel {
    img {
        width: 100%;
    }
}
</style>
