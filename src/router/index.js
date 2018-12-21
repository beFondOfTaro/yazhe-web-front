import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Blog from "@/components/blog/Blog";
import ArticleEditor from "@/components/blog/ArticleEditor";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/article-editor',
            name: 'ArticleEditor',
            component: ArticleEditor
        }
    ]
})
