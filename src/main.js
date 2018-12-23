// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import axios from 'axios'
import * as common from '@/assets/js/common'


Vue.config.productionTip = false;

//js一定要写在new Vue()之前，否则不会执行
Vue.prototype.$http = axios.create({
    baseURL: '/',
    headers: {token: common.getLocalStorage(common.storageKey.token)},
    method: 'post'
});

//创建Vuex仓库
import Vuex from 'vuex'
import 'es6-promise/auto'
import {CHANGE_LOGIN_STATE} from "@/assets/js/mutation-types";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        //登录状态
        isLogin: common.getLocalStorage(common.storageKey.userInfo) !== null
    },
    mutations: {
        [CHANGE_LOGIN_STATE](state){
            state.isLogin = !state.isLogin;
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

