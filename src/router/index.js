import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Blog from '@/pages/blog/Blog';
import ArticleEditor from '@/pages/blog/ArticleEditor';
import Article from '@/pages/blog/Article';

Vue.use(Router);

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
        },
        {
            path: '/article',
            name: 'Article',
            component: Article
        }
    ]
})
