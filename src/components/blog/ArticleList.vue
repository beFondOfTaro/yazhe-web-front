<template>
        <div class="list-group div_article">
            <!-- 子头栏 -->
            <a href="#" class="list-group-item active item_article_first">
                <h4 class="list-group-item-heading">
                    最新文章
                </h4>
            </a>
            <!-- 文章列表 -->
            <div class="list-group-item item_article" v-for="article in articleList">
                <div class="row">
                    <div class="div_center col-xs-9">
                        <div class="list-group-item-heading div_article_title">
                            <strong>
                                {{article.title}}
                            </strong>
                        </div>
                        <p class="list-group-item-text div_article_content">
                            {{article.content}}}
                        </p>
                    </div>
                    <!-- 右侧图片，信息 -->
                    <div class="col-xs-3 div_right_info">
                        <img class="iv_article img-rounded" src="../../assets/img/article-img.jpg">
                    </div>
                    <br>
                    <div class="col-xs-6">
                        <span>时间：{{getParsedTime(article.createTime)}}</span>
                    </div>
                    <div class="col-xs-6 div_right_info">
                        <span class="glyphicon glyphicon-heart"></span> {{article.praiseClicks}}
                        <span>阅读量：{{article.readingAmount}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {api, QueryPage} from "@/assets/js/common";

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
        methods: {
            getArticleList() {
                let vue = this;
                this.$http.request({
                    url: api.get(api.blog.article.getArticleList),
                    data: vue.request.articleList,
                }).then(function (res) {
                    if (res.data.code === 0) {
                        vue.articleList = res.data.data.list;
                    }else {
                        console.error(res.msg);
                    }
                });
            },
            getParsedTime(timestamp){
                let date = new Date(timestamp);
                return date.getFullYear() + "." + date.getMonth() + "." + date.getDay();
            }
            // getArticle() {
            //     this.$http.get(api.get(api.blog.article.getArticle + "/1")).then(function (res) {
            //         if (res.data.code === 0) {
            //             // alert(res.data);
            //         }else {
            //             console.error(res.msg);
            //         }
            //     });
            // }
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

    /* 文章顶部栏 */
    .item_article_first {
        background-color: #34374C !important;
        border-color: #34374C !important;
    }

    .item_article {
        min-height: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .item_article .row {
        width: 100%;
        align-items: center;
        overflow: hidden;
    }

    .div_center {
        height: auto;
        max-height: 140px;
        overflow: hidden;
    }

    .div_article_title {
        font-size: 22px;
    }

    .div_article_content {
        color: #a0a0a0;
        word-wrap: break-word;
        word-break: break-all;
        width: 100%;
    }

    .iv_article {
        width: 88px;
        height: 88px;
        margin: auto;
    }

    .div_right_info {
        text-align: right;
    }

</style>
