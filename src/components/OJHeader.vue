<template>
  <a-row :gutter="[10, 10]" class="oj-header" justify="center">
    <a-col :xs="2" :md="2" class="nav-left"
      ><img @click="router.push('/')" src="@/assets/logo-new.svg"
    /></a-col>
    <a-col :xs="20" :md="7">
      <a-menu
        @click="onNavClick"
        v-model:selectedKeys="currentNav"
        mode="horizontal"
        :items="navItems"
      />
    </a-col>
    <a-col :xs="4" :md="3">
      <a-space>
        <a-button
          type="primary"
          style="background: #a1c4fd"
          @click="jump('Login')"
          >登录</a-button
        >
        <a-button @click="jump('Register')">注册</a-button>
      </a-space>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import generateMenu from "../utils/generateMenu";
import { RoleEnum } from "../enum/RoleEnum";
import { routes } from "../router";
import { useRoute, useRouter } from "vue-router";
const navItems = ref<any[]>([]);
const currentNav = ref<string[]>(["/home"]);
const router = useRouter();
const route = useRoute();
const jump = (name: string) => [router.push({ name })];
const onNavClick = (item: any) => {
  router.push({ name: item.key });
};
onMounted(() => {
  currentNav.value = [route.name as string];
  navItems.value = generateMenu(routes, RoleEnum.UN_LOGIN);
});
</script>

<style lang="scss" scoped>
.oj-header {
  height: 100%;
  .nav-left {
    img {
      @media (max-width: 36rem) {
        width: 70px;
        // height: 10px;
      }
      @media (min-width: 36rem) {
        width: 120px;
        margin: 10px;
      }
    }
  }
}
</style>
