<template>
  <div class="register">
    <div class="register__img">
      <span class="iconfont">&#xe607;</span>
    </div>
    <div class="register__username">
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div class="register__password">
      <input type="password" placeholder="请输入密码" />
    </div>
    <div class="register__confirmPassword">
      <input type="password" placeholder="确认密码" />
    </div>
    <div class="register__button">
      <button @click="handleClick">注 册</button>
    </div>
    <p class="register__register">已有账号去登录</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Register",
  setup() {
    const router = useRouter();
    const handleClick = () => {
      localStorage.isLogin = true;
      router.push({ name: "Home" });
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/mixin.less");
.register {
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 0 0.4rem;
  &__img {
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    text-align: center;
    span {
      color: #0091ff;
      font-size: 0.66rem;
    }
  }
  &__username {
    margin-bottom: 0.16rem;
    input {
      .login-input();
    }
  }
  &__password {
    margin-bottom: 0.16rem;
    input {
      .login-input();
    }
  }
  &__confirmPassword {
    margin-bottom: 0.32rem;
    input {
      .login-input();
    }
  }
  &__button {
    margin-bottom: 0.16rem;
    button {
      width: 2.95rem;
      height: 0.48rem;
      box-sizing: border-box;
      background: #0091ff;
      color: #fff;
      border-radius: 0.04rem;
      font-size: 0.16rem;
      padding: 0.12rem 0;
      border: 0;
    }
  }
  &__register {
    font-size: 0.16rem;
    text-align: center;
  }
}
</style>
