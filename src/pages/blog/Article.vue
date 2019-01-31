<template>
    <div id="article-page" class="container">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h1 class="panel-title">{{article.title}}</h1>
                <div>作者：{{article.createdUsername}} <span id="created-time">时间：{{getCreatedTime}}</span></div>
            </div>
            <div class="panel-body" v-html="getContent">
            </div>
            <div class="panel-footer">
                <span class="foot-item"><span :class="['glyphicon','glyphicon-heart',{praised : praised}]" @click="praiseArticle()"></span> {{article.praiseClicks}}</span>
                <span class="foot-item"><span class="foot-item">阅读量：{{article.readingAmount}}</span></span>
                <span class="foot-item"><span class="glyphicon glyphicon-pencil foot-item"></span></span>
            </div>
        </div>
        <div class="write-comment">
            <label for="comment-textarea">发表评论：</label>
            <textarea id="comment-textarea" class="form-control" rows="3">{{addCommentRequest.content}}</textarea>
            <div style="text-align: right;margin-top: 2px"><button class="btn btn-default btn-sm" type="button" @click="addArticleComment">确定</button></div>
        </div>
        <div class="article-comment">
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">评论</a></li>
            </ul>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-info">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item list-group-item-info">Cras sit amet nibh libero</a>
                <a href="#" class="list-group-item list-group-item-info">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item list-group-item-info">Vestibulum at eros</a>
            </div>
        </div>
    </div>
</template>

<script>


    import {getParsedTime} from "../../assets/js/common";
    import {api, getApi, http} from "@/assets/js/api";
    import {mavonEditor} from 'mavon-editor';
    import hljs from 'highlight.js';

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
                praised: false,
                addCommentRequest: {
                    //内容
                    content: '',
                    //文章id
                    articleId: null,
                    //被回复的评论id
                    toCommentId: null
                }
            }
        },
        computed: {
            getContent() {
                return mavonEditor.getMarkdownIt().set({
                    highlight: function (str, lang) {
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return hljs.highlight(lang, str).value;
                            } catch (__) {}
                        }

                        return ''; // use external default escaping
                    }
                }).render(this.article.content);
            },
            getCreatedTime() {
                return getParsedTime(this.article.createTime);
            }
        },
        methods:{
            getArticle() {
                let vue = this;
                http.request({
                    url: getApi(api.blog.article.getArticle) + "/" + vue.$route.query.articleId,
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
                this.praised = true;
                http.request({
                    url: getApi(api.blog.article.praiseArticle) + vue.article.id
                }).then(function (res) {
                    if (res.data.code === 0) {
                        vue.article.praiseClicks++;
                    }
                })
            },
            //添加文章评论
            addArticleComment(){
                let vue = this;
                http.request({
                    url: getApi(api.blog.article.addArticleComment),
                    data: vue.addCommentRequest
                }).then(function (res) {
                    if (res.data.code === 0) {
                        alert('评论成功！');
                    }
                })
            }
        },
        created() {
            this.getArticle();
            this.addCommentRequest.articleId = this.article.id;
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
    /*
    评论的文本框属性
     */
    .write-comment{
        border-color: #eee;
        border-width: 2px 0 0 0;
        padding-top: 4px;
        margin-top: 10px;
        border-style: solid;
        margin-left: 15px;
        margin-bottom: 5px;
    }
    #comment-textarea{
        resize: none;
    }
    .list-group{
        margin-top: 5px;
    }
    .foot-item{
        margin-left: 5px;
        margin-right: 5px;
    }
</style>
