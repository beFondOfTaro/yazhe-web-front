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
      class="active"><a
        href="javascript:void (0);"
        data-toggle="modal"
        data-target="#login-modal">登录<span class="sr-only">(current)</span></a></li>
  </ul>
</template>

<script>
    import {LOGOUT} from "@/assets/js/mutation-types";

    export default {
        name: 'User',
        data () {
            return {

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
                this.$store.commit(LOGOUT);
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
