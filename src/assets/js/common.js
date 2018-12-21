// api统一定义
export const api = {
    hostName: '/api',

    login: {
        login: '/user-auth/login'
    },
    webStatistic: {
        clicksInc: '/user-auth/user-auth/clicks-inc'
    },
    blog: {
        article: {
            getArticleList: '/blog/article/get-article-list',
            getArticle: '/blog/article/article-by-id'
        }
    },
    get (name) {
        return this.hostName + name;
    }
};

export const storageKey = {
    // 用户信息
    userInfo: 'u_info',
    // token
    token: 'token'
};

/**
 * 设置本地存储
 * @param key
 * @param value
 */
export function setLocalStorage (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取本地存储
 * @param key
 * @param value
 * @returns {any}
 */
export function getLocalStorage (key, value) {
    return JSON.parse(localStorage.getItem(key))
}

/**
 * 分页对象构造函数
 * @constructor
 */
export class QueryPage {
    constructor(){
        this.pageSize = 20;
        this.pageNum = 1;
    }
}
