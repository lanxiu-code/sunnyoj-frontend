<template>
  <a-config-provider :theme="theme" :locale="locale">
    <div class="container">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
const locale = zhCN;
const theme = {
  token: {
    colorPrimary: "#a1c4fd",
  },
};
</script>
<style>
.container {
  background: #f8f8f8;
  height: 100vh;
  overflow: auto;
}
</style>
