
import axios from 'axios';
import { storageKey, getLocalStorage } from '@/assets/js/common';

// api统一定义
export const api = {
    hostName: '/api',

    login: {
        login: '/user-auth/login',
        register: '/user-auth/register-account'
    },
    webStatistic: {
        clicksInc: '/user-auth/clicks-inc'
    },
    blog: {
        article: {
            getArticleList: '/blog/article/get-article-list',
            getArticle: '/blog/article/get-article-by-id',
            // 添加文章
            addArticle: '/blog/article/add-article',
            // 点赞
            praiseArticle: '/blog/article/praise-article/',
            // 上传文章图片
            uploadArticlePicture: '/blog/article/upload-article-picture',
            //添加评论
            addArticleComment: '/blog/article/add-article-comment'
        }
    }
};

// 返回的状态码
export const resCode = {
    SUCCESS: 0
}

export function getApi (name) {
    return api.hostName + name;
}

/**
 * 创建axios用于http请求
 */
export function createAxios () {
    return axios.create({
        baseURL: '/',
        headers: {token: getLocalStorage(storageKey.token)},
        method: 'post'
    });
}
export const http = createAxios();

/**
 * 注册用户
 */
export function register (data, success) {
    http.request({
        url: getApi(api.login.register),
        data: data
    }).then(success)
}

/**
 * 登录
 * @param {*} data 
 * @param {*} success 
 */
export function login (data, success) {
    http.request({
        url: getApi(api.login.login) + '?identifier=' + data.identifier + '&credential=' + data.credential
    }).then(success)
}

/**
 * 获取文章列表
 * @param {*} data 
 * @param {*} success 
 */
export function getArticleList (data, success) {
    http.request({
        url: getApi(api.blog.article.getArticleList),
        data: data
    }).then(success);
}
