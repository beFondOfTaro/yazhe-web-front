
// api统一定义
export const api = {
    hostName: '/api/',

    login: {
        login: 'user-auth/login'
    },
    webStatistic: {
        clicksInc: 'user-auth/clicks-inc'
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
