<!-- 用户注册模态框 -->
<template>
  <div
    id="register-modal"
    class="modal fade bs-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="registerModal"
  >
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">注册</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="register-username">用户名</label>
              <input
                id="register-username"
                v-model="username"
                type="text"
                class="form-control"
                placeholder="用户名"
              >
            </div>
            <div class="form-group">
              <label for="register-password">密码</label>
              <input
                id="register-password"
                v-model="password"
                type="password"
                class="form-control"
                placeholder="密码"
              >
            </div>
            <div class="form-group">
              <label for="register-password-comfirm">确认密码</label>
              <input
                id="register-password-confirm"
                v-model="passwordConfirm"
                type="password"
                class="form-control"
                placeholder="请再次输入密码"
              >
              <div class="pwd-confirm-alter" v-show="showPasswordConfirm">两次密码不一致</div>
            </div>
            <div class="form-group">
              <label for="register-phone">手机号</label>
              <input id="register-phone" v-model="phone" type="number" class="form-control" placeholder="请输入手机号">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary" @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DISPLAY_REGISTER_MODAL} from '@/assets/js/mutation-types';
import {register} from '@/assets/js/api';

const passwordStatusConstans = {
  //未检查
  UNCHECKED: -1,
  //合法
  VALID: 0,
  //不合法
  INVALID: 1
};

export default {
  data() {
    return {
      //用户名
      username: "",
      // 真实姓名
      realName: '',
      //密码
      password: "",
      //确认密码
      passwordConfirm: '',
      //手机号
      phone: '',
      passwordStatus: passwordStatusConstans.UNCHECKED
    };
  },

  components: {},

  computed: {
    showPasswordConfirm () {
      if(this.passwordStatus == passwordStatusConstans.INVALID){
        return true;
      }
      return false;
    }
  },

  methods: {
    //确认密码是否一致
    confirmPassword () {
      if(this.passwordConfirm !== ''){
        if(this.password !== this.passwordConfirm){
          this.passwordStatus = passwordStatusConstans.INVALID;
        }else{
          this.passwordStatus = passwordStatusConstans.VALID;
        }
      }else{
        this.passwordStatus = passwordStatusConstans.UNCHECKED;
      }
    },
    register() {
      let vue = this;
      register({
          username: vue.username,
          password: vue.password,
          realName: vue.realName,
          phone: vue.phone
        },
        function (res) {
          if (res.data.code === 0){
            alert("注册成功！");
          }
        })
    }
  },

  watch: {
    //确认密码是否一致
    password (oldPassword, newPassword) {
      this.confirmPassword();
    },
    passwordConfirm (oldPassword, newPassword) {
      this.confirmPassword();
    }
  },

  mounted() {
    //绑定模态框事件
    let vue = this;
    $("#register-modal").on("show.bs.modal", function(e) {
      vue.$store.commit(DISPLAY_REGISTER_MODAL);
    });
    $("#register-modal").on("hide.bs.modal", function(e) {
      vue.$store.commit(DISPLAY_REGISTER_MODAL);
    });
  }
};
</script>
<style scoped>

.modal-content{
  font-size: 16px;
}

.pwd-confirm-alter{
  font-size: 14px;
  color: red;
}
</style>