<template>
    <div class="container">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h1 class="panel-title">{{article.title}}</h1>
                <div>作者：{{article.createdUsername}} <span id="created-time">时间：{{getCreatedTime}}</span></div>
            </div>
            <div class="panel-body" v-html="getContent">
            </div>
            <div class="panel-footer">
                <span :class="['glyphicon','glyphicon-heart',{praised : praised}]" @click="praiseArticle()"></span> {{article.praiseClicks}}
                <span>阅读量：{{article.readingAmount}}</span>
            </div>
        </div>
    </div>
</template>

<script>


    import {api, getParsedTime} from "../../assets/js/common";
    import {mavonEditor} from 'mavon-editor';

    export default {
        name: "Article",
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    content: '',
                    createdUsername: '',
                    createTime: 0,
                    praiseClicks: 0,
                    readingAmount: 0
                },
                //todo 暂定为可重复点赞，防止重复点赞时请设定为true
                praised: false
            }
        },
        computed: {
            getContent() {
                return mavonEditor.getMarkdownIt().render(this.article.content);
            },
            getCreatedTime() {
                return getParsedTime(this.article.createTime);
            }
        },
        methods:{
            getArticle() {
                let vue = this;
                this.$http.request({
                    url: api.get(api.blog.article.getArticle) + "/" + vue.$route.query.articleId,
                    method: 'get'
                }).then(function (res) {
                   if (res.data.code === 0) {
                       vue.article = res.data.data;
                   }
                });
            },
            //点赞
            praiseArticle() {
                let vue = this;
                if (this.praised) {
                    return;
                }
                this.$http.request({
                    url: api.get(api.blog.article.praiseArticle) + vue.article.id
                }).then(function (res) {
                    if (res.data.code === 0) {
                        vue.article.praiseClicks++;
                        vue.praised = true;
                    }
                })
            }
        },
        created() {
            this.getArticle();
        }
    }
</script>

<style scoped>
    .panel{
        margin-top: 56px;
    }
    .panel-title{
        font-size: x-large;
    }
    .panel-footer{
        text-align: right;
    }
    #created-time{
        margin-left: 5px;
    }
    /*点赞后的样式*/
    .praised{
        color: red;
    }
</style>
