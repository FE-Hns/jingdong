<template>
  <div class="login">
    <div class="login__img">
      <span class="iconfont">&#xe607;</span>
    </div>
    <div class="login__username">
      <input type="text" v-model="data.username" placeholder="请输入手机号" />
    </div>
    <div class="login__password">
      <input type="password" v-model="data.password" placeholder="请输入密码" />
    </div>
    <div class="login__button">
      <button @click="handleClick">登 录</button>
    </div>
    <p class="login__register" @click="goToRegister">立即注册</p>
  </div>
  <Message />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { $message } from "../../components/Message/Index.vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import api from "../../api/Index";

interface dataType {
  username: string | number;
  password: string | number;
}

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();

    const data = reactive<dataType>({
      username: "",
      password: "",
    });

    // 登录
    const handleClick = async (): Promise<void> => {
      const res = await post(api.login, data);
      const { retCode } = res;
      if (retCode === 0) {
        $message("登陆成功！！！");
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      }
    };

    // 注册
    const goToRegister = () => {
      router.push({ name: "Register" });
    };

    return {
      handleClick,
      goToRegister,
      data,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/mixin.less");
@import url("../../style/variable.less");
.login {
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: @bg-color-white;
  padding: 0 0.4rem;
  text-align: center;
  &__img {
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    text-align: center;
    span {
      color: @content-color-dark-blue;
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
      background: @content-color-dark-blue;
      color: @bg-color-white;
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
