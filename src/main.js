// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import * as common from '@/assets/js/common'
import Vuex from 'vuex'
import 'es6-promise/auto'
import {LOGIN, LOGOUT, DISPALY_LOGIN_MODAL, DISPLAY_REGISTER_MODAL} from '@/assets/js/mutation-types';

Vue.config.productionTip = false;

// js一定要写在new Vue()之前，否则不会执行

// 创建Vuex仓库
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        // token
        token: common.getLocalStorage(common.storageKey.token),
        // 用户信息
        userInfo: common.getLocalStorage(common.storageKey.userInfo),
        // 登录模态框的显示状态
        isLoginShown: false,
        // 注册模态框的显示状态
        isRegisterShown: false
    },
    mutations: {
        [LOGOUT] (state) {
            localStorage.removeItem(common.storageKey.userInfo);
            localStorage.removeItem(common.storageKey.token);
            // 不能直接置空，否则页面渲染会出错
            state.userInfo = {
                username: '',
                roleList: []
            };
            state.token = null;
        },
        [LOGIN] (state, payload) {
            common.setLocalStorage(common.storageKey.token, payload.token);
            common.setLocalStorage(common.storageKey.userInfo, payload.userInfo);
            state.userInfo = payload.userInfo;
            state.token = payload.token;
        },
        // 显示登录的模态框
        [DISPALY_LOGIN_MODAL] (state) {
            state.isLoginShown = !state.isLoginShown;
        },
        // 显示注册模态框
        [DISPLAY_REGISTER_MODAL] (state) {
            state.isRegisterShown = !state.isRegisterShown;
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
