<template>
    <div id="article-page" class="container">
        <mavon-editor class="editor" v-show="false"/>
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
            <textarea id="comment-textarea" class="form-control" rows="3" v-model="addCommentRequest.content"></textarea>
            <div style="text-align: right;margin-top: 2px"><button class="btn btn-default btn-sm" type="button" @click="addArticleComment">确定</button></div>
        </div>
        <div class="article-comment">
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#comment-list">评论</a></li>
            </ul>
            <div class="list-group">
                <div v-if="articleCommentList.length === 0" style="text-align: center">暂无评论噢~</div>
                <a href="javascript:" class="list-group-item list-group-item-info" v-for="comment in articleCommentList">
                    {{comment.content}}
                    <div class="comment-foot" style="text-align: right">
                        <span class="comment-foot-item-group">
                            <span class="foot-item">{{comment.createUser.username}}</span>
                            <span class="foot-item">{{getCommentTime(comment.createTime)}}</span>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {getParsedTime} from "../../assets/js/common";
    import {api, getApi, http, resCode} from "@/assets/js/api";
    import mavonEditor from 'mavon-editor';

    // 使用markdown编辑器
    Vue.use(mavonEditor);

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
                },
                getArticleCommentRo: {
                    articleId: '',
                    queryPage: {
                        pageNum: 1,
                        pageSize: 20
                    }
                },
                articleCommentList: []
            }
        },
        computed: {
            getContent() {
                /*
                虽然不知道为什么，但是一旦打开f12并关闭缓存后再刷新，
                代码高亮就会消失，mavon-editor这个东西是真的不好用！各种bug
                目前也只能这样了，不影响用户体验
                 */
                return mavonEditor.markdownIt.render(this.article.content);
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
                vue.addCommentRequest.articleId = vue.article.id;
                http.request({
                    url: getApi(api.blog.article.addArticleComment),
                    data: vue.addCommentRequest
                }).then(function (res) {
                    let code = res.data.code;
                    let msg = res.data.msg;
                    if (code === resCode.SUCCESS.code) {
                        alert(resCode.SUCCESS.msg);
                        vue.getArticleComment();
                    }else if (code === resCode.UNAUTHENTICATED.code) {
                        alert(resCode.UNAUTHENTICATED.msg);
                    }else if (code === resCode.INVALID_TOKEN.code) {
                        alert(msg);
                    }else {
                        alert(msg);
                    }
                })
            },
            //查询评论
            getArticleComment(){
                let vue = this;
                http.request({
                    url: getApi(api.blog.article.getCommentByCondition),
                    data: vue.getArticleCommentRo
                }).then(function (res) {
                    if (res.data.code === resCode.SUCCESS.code) {
                        vue.articleCommentList = res.data.data.list;
                    }else {
                        alert(res.data.msg);
                    }

                })
            },
            getCommentTime(timestamp) {
                return getParsedTime(timestamp);
            }
        },
        created() {
            this.getArticle();
            this.getArticleComment();
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
    .comment-foot{
        text-align: right;
    }
    .comment-foot-item-group{
        border-style: solid;
        border-width: 1px;
        border-radius: 10%;
    }
</style>
