
import axios from 'axios';
import { storageKey, getLocalStorage } from '@/assets/js/common';

// api统一定义
export const api = {
    hostName: '/api',

    login: {
        login: '/user-auth/login',
        register: '/user-auth/register-account',
        logout: '/user-auth/logout'
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
            addArticleComment: '/blog/article/add-article-comment',
            //查询评论
            getCommentByCondition: '/blog/article/query-comment-by-condition'
        }
    }
};

// 返回的状态码
export const resCode = {
    SUCCESS: {
        code: 0,
        msg: '成功'
    },
    INVALID_TOKEN: {
        code: 6,
        msg: '登录已过期，请重新登录'
    },
    UNAUTHENTICATED: {
        code: 7,
        msg: '请先登录'
    }
}

export function getApi (name) {
    return api.hostName + name;
}


let http = {};
/**
 * 创建axios用于http请求
 */
export function createAxios () {
    let token = getLocalStorage(storageKey.token);
    http = axios.create({
        baseURL: '/',
        headers: {token: token === null ? '' : token},
        method: 'post'
    });
}
createAxios();
export {http}

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
