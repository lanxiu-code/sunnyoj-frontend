<template>
  <a-result
    status="403"
    title="403"
    sub-title="Sorry, you are not permission to access this page."
  >
    <template #extra>
      <a-button type="primary" @click="jump('Home')">返回首页</a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const jump = (name: string) => {
  router.push({ name });
};
</script>

<style></style>
