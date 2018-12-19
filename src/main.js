// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '@/assets/css/cover.css'
import axios from 'axios'
import * as common from '@/assets/js/common'

Vue.config.productionTip = false;
//js一定要写在new Vue()之前，否则不会执行
Vue.prototype.$http = axios.create({
    baseURL: '/',
    headers: {token: common.getLocalStorage(common.storageKey.token)},
    method: 'post'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

