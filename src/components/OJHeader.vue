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
      <a-flex justify="end" align="center" style="height: 100%">
        <a-dropdown placement="bottom">
          <a-avatar
            v-show="currentUser.id"
            :src="currentUser.userAvatar"
            :size="{ sm: 10, md: 20, lg: 30, xl: 40, xxl: 50 }"
            alt="用户头像"
          />
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">个人信息</a>
              </a-menu-item>
              <a-menu-item>
                <a @click="jump('SunnyojAdmin')">管理后台</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">退出登录</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <a-space v-show="!currentUser.id">
          <a-button
            type="primary"
            style="background: #a1c4fd"
            @click="jump('Login')"
            >登录</a-button
          >
          <a-button @click="jump('Register')">注册</a-button>
        </a-space>
      </a-flex>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import generateMenu from "@/utils/generateMenu";
import { RoleEnum } from "@/enum/RoleEnum";
import { userRoutes } from "@/router";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store";
const navItems = ref<any[]>([]);
const currentNav = ref<string[]>(["/home"]);
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const currentUser = computed(() => userStore.currentUser);
const jump = (name: string) => {
  console.log(name);

  router.push({ name });
};
const onNavClick = (item: any) => {
  router.push({ name: item.key });
};
onMounted(() => {
  currentNav.value = [route.name as string];
  navItems.value = generateMenu(userRoutes, RoleEnum.UN_LOGIN);
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
