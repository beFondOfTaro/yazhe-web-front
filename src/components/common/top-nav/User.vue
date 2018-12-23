<template>
  <ul
    class="nav navbar-nav navbar-right">
    <li v-if="getIsLogin">
      <a
        href="#"
        class="dropdown-toggle user-href"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <img class="user-img" src="/static/favicon.ico"><span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#">登录用户：<strong style="display: block">{{ userInfo.username }}({{parseRoleList(userInfo.roleList)}})</strong></a>
        </li>
        <li
          role="separator"
          class="divider"></li>
          <li><button @click="logout()">注销</button></li>
      </ul>
    </li>
    <li
      v-if="!getIsLogin"
      class="active"><a
        href="javascript:void (0);"
        data-toggle="modal"
        data-target="#login-modal">登录<span class="sr-only">(current)</span></a></li>
  </ul>
</template>

<script>
    import * as common from '../../../assets/js/common';
    import {CHANGE_LOGIN_STATE} from "@/assets/js/mutation-types";

    export default {
        name: 'User',
        data () {
            return {
                userInfo: {
                    username: '',
                    roleList: []
                }
            }
        },
        computed: {
            getIsLogin(){
                return this.$store.state.isLogin;
            }
        },
        methods: {
            //解析api返回的roleList转换成角色字符串
             parseRoleList(roleList) {
                 let roleStr = '';
                 for (let role of roleList){
                     roleStr = roleStr + ' ' + role.name;
                 }
                 return roleStr;
             },
            //注销
            logout () {
                localStorage.removeItem(common.storageKey.token);
                localStorage.removeItem(common.storageKey.userInfo);
                this.$store.commit(CHANGE_LOGIN_STATE);
            }
        },
        created () {
            let userInfo = common.getLocalStorage(common.storageKey.userInfo);
            this.isLogin = userInfo !== null;
            this.userInfo = userInfo;
        }
    }
</script>

<style scoped>
    .user-img{
        width: 40px;
        height: 40px;
    }

    .user-href{
        padding: 5px 15px 5px 15px;
    }
</style>
