<template>
  <ul
    id="nav-user"
    class="nav navbar-nav navbar-right">
    <li v-if="isLogin">
      <a
        href="#"
        class="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        <img src="/static/favicon.ico"><span class="caret"/>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#">登录用户：<strong style="display: block">{{ userInfo.username }}</strong></a>
          <a href="#">角色：
              <strong v-for="role in userInfo.roleList"
              :key="role.id" style="display: block">{{ role.name }} </strong>
          </a>
        </li>
        <li
          role="separator"
          class="divider"/>
        <li class="dropdown-header">Nav header</li>
      </ul>
    </li>
    <li
      v-if="!isLogin"
      class="active"><a
        href="javascript:void (0);"
        data-toggle="modal"
        data-target="#login-modal">登录<span class="sr-only">(current)</span></a></li>
  </ul>
</template>

<script>
    import * as common from '../../../assets/js/common';

    export default {
        name: 'User',
        data () {
            return {
                isLogin: false,
                userInfo: {
                    username: '',
                    roleList: []
                }
            }
        },
        created () {
            this.isLogin = common.getLocalStorage(common.storageKey.userInfo) !== null;
            this.userInfo = common.getLocalStorage(common.storageKey.userInfo);
        }
    }
</script>

<style scoped>

</style>
