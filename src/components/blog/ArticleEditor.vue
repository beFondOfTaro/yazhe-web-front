<template>
    <div>
        <div class="">
            <label for="article-title">标题：</label>
            <input id="article-title" placeholder="请输入标题" type="text" v-model="article.title">
        </div>
        <mavon-editor class="editor" v-model="article.content" @save="saveArticle()" />
        <div><button id="submit-article" type="button" class="btn btn-default" @click="submitArticle()">提交</button></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import emoji from 'markdown-it-emoji'
    import {api, getLocalStorage, QueryPage, setLocalStorage, storageKey} from "@/assets/js/common";

    // 使用markdown编辑器
    Vue.use(mavonEditor);
    let md = mavonEditor.markdownIt;
    //关闭工具栏上的“查看html源码”,没起作用
    md.set({
        toolbars: {
            htmlcode: false
        }
    });
    md.use(emoji);

    export default {
        name: "ArticleEditor",
        data () {
            return {
                article: {
                    id: 0,
                    title: '',
                    content: '',
                    queryPage: new QueryPage()
                }
            }
        },
        methods: {
            //临时存储文章
            saveArticle() {
                  setLocalStorage(storageKey.writingArticle,this.article);
                  alert('暂存成功！');
            },
            submitArticle() {
                let vue = this;
                //验证表单
                let pattern = '.+';
                if (!(this.article.title.match(pattern) && this.article.content.match(pattern))){
                    alert("标题或正文不能为空！");
                    return;
                }
                this.$http.request({
                    url: api.get(api.blog.article.addArticle),
                    data: vue.article
                }).then(function (res) {
                    if (res.data.code === 0) {
                        alert('添加文章成功');
                        //清空文章的本地存储
                        localStorage.removeItem(storageKey.writingArticle);
                    }else {
                        alert('文章添加失败！')
                    }
                })
            }
        },
        created() {
            //如果有文章缓存，则载入缓存
            let article = getLocalStorage(storageKey.writingArticle);
            if (article !== null){
                this.article = article;
            }
        }
    }
</script>

<style scoped>
    #article-title{
        margin-top: 51px;
    }

    .editor{
        z-index: 1029;
    }

    #submit-article{
       margin-left: 95%;
    }
</style>
