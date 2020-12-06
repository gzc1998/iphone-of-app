<template>
<div class="chat">
    <el-form :inline="true" :model="chatlist" class="demo-form-inline">
        <el-form-item>
            <el-input v-model="formInline.user" placeholder="请输入信息，加油，奥利给！"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">发送信息，奥利给！</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import md5 from "blueimp-md5";
export default {
    created() {
        this.sendmessage();
    },
    data() {
        return {
            chatlist: "",
        };
    },
    methods: {
        issign(obj) {
            let aoligei = Object.keys(obj);
            aoligei = aoligei.sort();
            let ganle = "";
            aoligei.forEach((key) => {
                ganle += key + "=" + encodeURI(obj[key]) + "&";
            });
            ganle += "app_key=mz1SErK3CjnNuERb";
            ganle = md5(ganle).toUperCase();
            console.log(ganle);
            return ganle;
        },
        getnonce_str() {
            let str0 = Math.random();
            str0 = str0.toString(16).substr(2);
            return str0;
        },
        creatime_stamp() {
            let timer = new Date();
            timer = Date.parse(timer);
            timer.toString().substr(0, 10);
            timer = Number.parseInt(timer);
            return timer;
        },
        sendmessage() {
            let chaturl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
            let baseurl = "https://bird.ioliu.cn/v2?url=";
            let params = {
                app_id: 2159458530,
                time_stamp: this.creatime_stamp(),
                nonce_str: this.getnonce_str(),
                session: 10000,
                question: "你叫啥",
            };
            params.sign = this.issign(params);
            console.log(params);
            this.axios
                .get(baseurl + chaturl, {
                    params,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.chat {
    position: fixed;
    bottom: 1rem;
}
</style>
