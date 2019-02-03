<template>
        <div class="list-group div_article">
            <!-- 文章列表 -->
            <div class="post-preview" v-for="article in articleList" :key="article.id">
                <router-link :to="{'name': 'Article', query: {articleId: article.id}}">
                    <h2 class="post-title">
                        {{article.title}}
                    </h2>
                    <h3 class="post-subtitle" v-text="getArticleDigest(article.content)"></h3>
                </router-link>
                <p class="post-meta">
                    <a href="javascript:">{{article.createdUsername}}</a>
                    发表于{{getParsedTime(article.createTime)}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="glyphicon glyphicon-heart"></span> {{article.praiseClicks}}
                    <span>阅读量：{{article.readingAmount}}</span></p>
            </div>
            <hr>
        </div>
</template>

<script>
    import {QueryPage} from "@/assets/js/common";
    import {getArticleList} from "@/assets/js/api";
    import {mavonEditor} from 'mavon-editor';
    import {getParsedTime} from "../../assets/js/common";

    export default {
        name: "ArticleList",
        data() {
            return {
                articleList: [],
                request: {
                    articleList: {
                        queryPage: new QueryPage()
                    }
                }
            }
        },
        computed: {

        },
        methods: {
            getArticleList() {
                let vue = this;
                getArticleList(vue.request.articleList,function (res) {
                    if (res.data.code === 0) {
                        vue.articleList = res.data.data.list;
                    }else {
                        console.error(res.msg);
                    }
                })
            },
            getParsedTime(timestamp){
                return getParsedTime(timestamp);
            },
            //获取文章摘要
            getArticleDigest(content){
                let md = mavonEditor.getMarkdownIt();
                let html = md.render(content);
                return $(html).text();
            }
        },
        created() {
            this.getArticleList();
        }
    }
</script>

<style scoped>
    /* 文章列表 */
    .div_article {
        margin-top: 24px;
    }

    .item_article .row {
        width: 100%;
        align-items: center;
        overflow: hidden;
    }
    .post-preview{

    }
    .post-preview>a {
        color: #212529;
    }
    .post-preview>a:hover{
        color: #007bff;
        text-decoration: none;
    }
    .post-preview>a>.post-title {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .post-preview>a>.post-subtitle {
        font-weight: 300;
        margin: 0 0 10px;

        /*文本超出隐藏*/
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /*显示文本行数*/
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
    .post-preview>.post-meta {
        font-size: 18px;
        font-style: italic;
        margin-top: 0;
        color: #868e96;
    }
    .post-preview>.post-meta>a {
        text-decoration: none;
        color: #212529;
    }
    p {
        line-height: 1.5;
        margin: 30px 0;
    }
    a {
        -webkit-transition: all .2s;
        transition: all .2s;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 800;
        font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        line-height: 1.2;
        color: inherit;
    }
</style>
