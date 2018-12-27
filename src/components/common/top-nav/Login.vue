<template>
  <!--登录模态框-->
  <div
    id="login-modal"
    class="modal fade bs-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginModal">
    <div
      class="modal-dialog modal-sm"
      role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">登录</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="login-username">用户名</label>
              <input
                id="login-username"
                v-model="identifier"
                type="text"
                class="form-control"
                placeholder="用户名">
            </div>
            <div class="form-group">
              <label for="login-password">密码</label>
              <input
                id="login-password"
                v-model="credential"
                type="password"
                class="form-control"
                placeholder="密码">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            id="close-login"
            type="button"
            class="btn btn-default"
            data-dismiss="modal">关闭</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import * as common from '../../../assets/js/common';
    import {LOGIN} from "@/assets/js/mutation-types";

    export default {
        name: 'Login',
        data () {
            return {
                identifier: '',
                credential: ''
            }
        },
        methods: {
            login: function () {
                var loginUsername = this.identifier;
                var loginPassword = this.credential;
                let vue = this;
                this.$http.request({
                    url: common.api.get(common.api.login.login) + "?identifier=" + loginUsername + "&credential=" + loginPassword,
                }).then(function (res) {
                    if (res.data.code === 0) {
                        vue.$store.commit(LOGIN,{
                            token: res.data.data.token,
                            userInfo: res.data.data.userInfo
                        });
                        alert('登录成功');
                        $('#login-modal').modal('hide');
                    }
                });
            }
        }
    }
</script>

<style scoped>
    /* 登录框 */
    #login-modal {
        text-shadow: none;
        color: #0f0f0f;
    }

    #close-login {
        border: 1px solid rgb(204, 204, 204);
    }

    #login-modal .modal-body{
        text-align: justify;
    }
</style>
