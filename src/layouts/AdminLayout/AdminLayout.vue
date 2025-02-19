<template>
  <a-layout class="adminLayout">
    <a-layout-header class="header">
      <a-row justify="space-between">
        <a-col :xs="2" :md="2">
          <img width="150" src="@/assets/images/admin-logo.png" />
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
                    <a href="javascript:;">退出登录</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-flex>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        style="background: #fff"
        theme="light"
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <a-menu
          @click="onMenuClick"
          v-model:selectedKeys="selectedMenuKeys"
          theme="light"
          mode="inline"
          :items="menuItems"
        >
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="content-wrapper">
          <div class="content"><router-view /></div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { adminRoutes } from "@/router";
import generateMenu from "@/utils/generateMenu";
import { RoleEnum } from "@/enum/RoleEnum";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store";
const userStore = useUserStore();
const currentUser = computed(() => userStore.currentUser);
const router = useRouter();
const route = useRoute();
const selectedMenuKeys = ref<string[]>(["AdminNotice"]);
const menuItems = ref<any[]>([]);
const onMenuClick = (item: any) => {
  router.push({ name: item.key });
};
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
onMounted(() => {
  selectedMenuKeys.value = [route.name as string];
  menuItems.value = generateMenu(adminRoutes, RoleEnum.USER);
});
</script>
<style lang="scss" scoped>
.adminLayout {
  height: 100%;
  .header {
    background: linear-gradient(rgb(56, 189, 248), rgb(186, 230, 253));
  }
  .content-wrapper {
    padding: 15px;
    box-sizing: border-box;
    .content {
      background: white;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>
