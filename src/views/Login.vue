<template>
  <div class="container">
    <div class="heading">晴练网-登录</div>
    <form class="form">
      <div v-show="loginType === 0">
        <input
          required
          class="input"
          type="text"
          :value="loginInfo.userAccount"
          placeholder="账号"
        />
        <input required class="input" type="password" placeholder="密码" />
      </div>
      <div v-show="loginType === 1">
        <input
          required
          class="input"
          type="email"
          :value="loginInfo.userEmail"
          placeholder="邮箱"
        />
        <a-row
          justify="space-between"
          align="middle"
          style="margin-top: 0.9375rem"
        >
          <a-col :md="18">
            <input
              required
              class="input"
              type="password"
              placeholder="验证码"
              style="margin-top: 0"
            />
          </a-col>
          <a-col :md="5">
            <a-button
              :disabled="codeBtnDisabled"
              size="small"
              class="sendCode"
              @click="sendCode"
              >{{ codeText }}</a-button
            >
          </a-col>
        </a-row>
      </div>

      <a-row justify="end">
        <span class="forgot-password"><a href="#">忘记密码 ?</a></span>
        <span class="forgot-password" @click="jump('Register')"
          ><a href="#">去注册</a></span
        >
      </a-row>
      <a-button htmlType="submit" class="login-button">登录</a-button>
      <div class="social-account-container">
        <span class="title">Or Sign in with</span>
        <div class="social-accounts">
          <span
            v-show="loginType === 0"
            class="social-button email"
            @click="loginType = 1"
          >
            <svg
              t="1739014897861"
              class="icon"
              viewBox="0 0 1331 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1162"
              height="1em"
            >
              <path
                d="M216.71635719 172.38443094m92.35817812 0l771.65258156 0q92.35817812 0 92.35817813 92.35817906l0 554.14907063q0 92.35817812-92.35817813 92.35817812l-771.65258156 0q-92.35817812 0-92.35817812-92.35817812l0-554.14907063q0-92.35817812 92.35817812-92.35817906Z"
                fill="#51F2F2"
                p-id="1163"
              ></path>
              <path
                d="M1094.11905219 724.68633875a46.17908906 46.17908906 0 0 0 46.17909-46.17908906v-507.96998157A138.53726812 138.53726812 0 0 0 1067.33518063 49.54805375a46.17908906 46.17908906 0 0 0-36.01968938-17.54805375H140.52086a46.17908906 46.17908906 0 0 0-36.01969031 17.54805375A138.53726812 138.53726812 0 0 0 32 170.53726812v600.32815969a138.53726812 138.53726812 0 0 0 138.53726812 138.53726813h831.22360594a138.53726812 138.53726812 0 0 0 120.5274225-70.19221594 46.17908906 46.17908906 0 0 0-17.54805375-62.80356188 46.17908906 46.17908906 0 0 0-62.80356094 17.08626375 46.17908906 46.17908906 0 0 1-40.17580781 23.551335H170.53726812a46.17908906 46.17908906 0 0 1-46.17909-46.17908906v-600.32815969a46.17908906 46.17908906 0 0 1 12.93014532-32.32536281l415.61180343 389.28972188a46.17908906 46.17908906 0 0 0 31.86357094 12.46835437 46.17908906 46.17908906 0 0 0 31.40178094-12.46835437l415.61180344-389.28972188a46.17908906 46.17908906 0 0 1 13.39193625 32.32536281v507.96998157a46.17908906 46.17908906 0 0 0 48.94983375 46.17908906zM586.14907063 432.37270344L257.81574594 126.20534187H914.02060438z"
                fill="#333333"
                p-id="1164"
              ></path>
            </svg>
          </span>
          <span
            v-show="loginType === 1"
            class="social-button password"
            @click="loginType = 0"
          >
            <svg
              t="1739016591559"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1053"
              height="1em"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#EFF2FF"
                p-id="1054"
              ></path>
              <path
                d="M512 288A121.6 121.6 0 0 1 633.6 409.6v51.2H640a51.2 51.2 0 0 1 51.2 51.2v153.6a51.2 51.2 0 0 1-51.2 51.2H384a51.2 51.2 0 0 1-51.2-51.2v-153.6a51.2 51.2 0 0 1 51.2-51.2h6.4v-51.2A121.6 121.6 0 0 1 512 288zM512 537.6a25.6 25.6 0 0 0-12.8 47.7696V614.4a12.8 12.8 0 1 0 25.6 0l0.0256-29.0304A25.6 25.6 0 0 0 512 537.6z m0-211.2A83.2 83.2 0 0 0 428.8 409.6v51.2h166.4v-51.2A83.2 83.2 0 0 0 512 326.4z"
                fill="#6A83FD"
                p-id="1055"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { SEND_CODE_INTERVAL } from "../constants/common";
const loginType = ref(0);
const codeText = ref("发送");
const codeBtnDisabled = ref(false);
const router = useRouter();
let sid = null;
const loginInfo = reactive({
  userAccount: "",
  userPassword: "",
  userEmail: "",
  verifyCode: "",
});
const jump = (name: string) => {
  router.push({ name });
};
const sendCode = () => {
  console.log(sid);

  if (sid) {
    return;
  }
  codeBtnDisabled.value = true;
  let time = SEND_CODE_INTERVAL;
  sid = setInterval(() => {
    codeText.value = `${time--}s`;
    if (time <= 0) {
      codeText.value = "发送";
      codeBtnDisabled.value = false;
      clearInterval(sid);
      sid = null;
    }
  }, 1000);
};
</script>

<style lang="scss" scoped>
/* From Uiverse.io by Smit-Prajapati */
.container {
  max-width: 350px;
  background: #f8f9fd;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255) 0%,
    rgb(244, 247, 251) 100%
  );
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  margin: 100px auto;
}
.sendCode {
  color: #646060;
  height: 35px;
  width: 50px;
  border-radius: 100px;
  border: none;
  box-shadow: #cff0ff 0px 10px 10px -5px;
}
.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: rgb(16, 137, 211);
}

.form {
  margin-top: 20px;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #12b1d1;
}

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 11px;
  color: #0099ff;
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  height: 40px;
  font-weight: bold;
  background: linear-gradient(
    45deg,
    rgb(16, 137, 211) 0%,
    rgb(18, 177, 209) 100%
  );
  color: white;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
  margin-top: 25px;
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 10px;
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 5px solid white;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 15px;
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 9px;
}
</style>
