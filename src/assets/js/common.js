// api统一定义
export const api = {
    hostName: '/api',

    login: {
        login: '/user-auth/login'
    },
    webStatistic: {
        clicksInc: '/user-auth/clicks-inc'
    },
    blog: {
        article: {
            getArticleList: '/blog/article/get-article-list',
            getArticle: '/blog/article/get-article-by-id',
            //添加文章
            addArticle: '/blog/article/add-article',
            //点赞
            praiseArticle: '/blog/article/praise-article/'
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
    token: 'token',
    //正在编辑的文章
    writingArticle: 'writing_article'
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
export function getLocalStorage (key) {
    let value = localStorage.getItem(key);
    if (value === undefined || value === null) {
        return null;
    }
    return JSON.parse(value);
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

/**
 * 格式化时间
 * @param timestamp 时间戳
 * @returns {string} yyyy.mm.dd
 */
export function getParsedTime(timestamp) {
    let date = new Date(timestamp);
    let y = date.getFullYear();
     let m = date.getMonth() + 1;
     let d = date.getDate();
    return y + "." + (m < 10 ? "0" + m : m) + "." + (d < 10 ? "0" + d : d);
}
