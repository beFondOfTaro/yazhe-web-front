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
        <li><a href="#">登录用户：<strong style="display: block">{{ getUserInfo.username }}({{parseRoleList(getUserInfo.roleList)}})</strong></a>
        </li>
        <li
          role="separator"
          class="divider"></li>
          <li><button class="btn btn-default" @click="logout()">注销</button></li>
      </ul>
    </li>
    <li
      v-if="!getIsLogin"
      :class="{active: isLoginShown}"><a
        href="#"
        data-toggle="modal"
        data-target="#login-modal">登录<span class="sr-only">(current)</span></a></li>
    <li
      v-if="!getIsLogin"
      :class="{active: isRegisterShown}"><a
        href="#"
        data-toggle="modal"
        data-target="#register-modal">注册<span class="sr-only">(current)</span></a>
    </li>
  </ul>
</template>

<script>
    import {LOGOUT} from "@/assets/js/mutation-types";
    import {api, getApi, http, resCode} from "@/assets/js/api";

    export default {
        name: 'User',
        data () {
            return {
                userInfo: {}
            }
        },
        computed: {
            getIsLogin(){
                return this.$store.state.token !== null;
            },
            getUserInfo(){
                let userInfo = this.$store.state.userInfo;
                if (userInfo === null) {
                    return {
                        username: '',
                        roleList: []
                    }
                }else {
                    return userInfo;
                }
            },
            isRegisterShown() {
                return this.$store.state.isRegisterShown;
            },
            isLoginShown () {
                return this.$store.state.isLoginShown;
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
                 let vue = this;
                vue.$store.commit(LOGOUT);
                http.request({
                    url: getApi(api.login.logout)
                }).then(function (res) {
                    if (res.data.code === resCode.SUCCESS.code) {
                        console.log('注销成功！');
                    }
                    //不管是否成功都要注销
                    vue.$router.push('/');
                });
            }
        },
        created () {
            let userInfo = this.$store.state.userInfo;
            if (userInfo !== null) {
                this.userInfo = userInfo;
            }
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
