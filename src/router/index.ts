import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { RoleEnum } from "../enum/RoleEnum";
export const routes = [
  {
    path: "/",
    redirect: "/home",
    hiddenItem: true,
  },
  {
    path: "/",
    name: "基础布局",
    meta: {},
    component: () => import("@/layouts/BasicLayout.vue"),
    children: [
      {
        path: "home",
        name: "首页",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "questionBank",
        name: "题库",
        component: () => import("@/views/QuestionBank.vue"),
        meta: {
          title: "题库",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "contest",
        name: "比赛",
        component: () => import("@/views/Contest.vue"),
        meta: {
          title: "比赛",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "status",
        name: "状态",
        component: () => import("@/views/Status.vue"),
        meta: {
          title: "状态",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "rank",
        name: "排名",
        component: () => import("@/views/Rank.vue"),
        meta: {
          title: "排名",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "faqs",
        name: "常见问题",
        component: () => import("@/views/Faqs.vue"),
        meta: {
          title: "常见问题",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
    ],
  },
] as RouteRecordRaw[];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
