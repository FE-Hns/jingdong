<template>
  <div class="register">
    <div class="register__img">
      <span class="iconfont">&#xe607;</span>
    </div>
    <div class="register__username">
      <input type="text" v-model="username" placeholder="请输入手机号" />
    </div>
    <div class="register__password">
      <input type="password" v-model="password" placeholder="请输入密码" />
    </div>
    <div class="register__confirmPassword">
      <input type="password" v-model="rePassword" @change="checkPassword" placeholder="确认密码" />
    </div>
    <div class="register__button">
      <button @click="handleClick">注 册</button>
    </div>
    <p class="register__register" @click="goToLogin">已有账号去登录</p>
  </div>
  <Message />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "../../utils/request";
import { $message } from "../../components/Message/Index.vue";
import api from "../../api/Index";
interface dataType {
  username: string;
  password: string | number;
  rePassword: string | number;
}
export default defineComponent({
  name: "Register",
  setup() {
    const router = useRouter();

    const data = reactive<dataType>({
      username: "",
      password: "",
      rePassword: "",
    });

    // 注册 注册完之后跳转到首页
    const handleClick = () => {
      post(api.register, data).then((res) => {
        const { retCode } = res;
        if (retCode === 0) {
          localStorage.isLogin = true;
          router.push({ name: "Home" });
          $message("注册成功");
        }
      });
    };

    // 去登录 直接跳转到登录
    const goToLogin = () => {
      router.push({ name: "Login" });
    };

    // 检测密码是否一致
    const checkPassword = () => {
      if (data.password !== data.rePassword) {
        $message("二次输入的密码不一致");
      }
    };

    // 处理数据
    const { username, password, rePassword } = toRefs(data);

    return {
      handleClick,
      goToLogin,
      checkPassword,
      username,
      password,
      rePassword,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/mixin.less");
@import url("../../style/variable.less");
.register {
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
