<template>
  <a-config-provider :locale="locale">
    <div class="container">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";

const locale = zhCN;
</script>
<style scoped>
.container {
  background: #f8f8f8;
  height: 100vh;
  overflow: auto;
}
</style>
