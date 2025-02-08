import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { RoleEnum } from "../enum/RoleEnum";
export const routes = [
  {
    path: "/",
    redirect: "/sunnyoj/home",
    hideInMenu: true,
  },
  {
    path: "/sunnyoj",
    name: "Sunnyoj",
    component: () => import("@/layouts/BasicLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        hideInMenu: true,
        component: () => import("@/views/Login.vue"),
        meta: {
          title: "登录",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "register",
        name: "Register",
        hideInMenu: true,
        component: () => import("@/views/Register.vue"),
        meta: {
          title: "注册",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "questionBank",
        name: "QuestionBank",
        component: () => import("@/views/QuestionBank.vue"),
        meta: {
          title: "题库",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "contest",
        name: "Contest",
        component: () => import("@/views/Contest.vue"),
        meta: {
          title: "比赛",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "status",
        name: "Status",
        component: () => import("@/views/Status.vue"),
        meta: {
          title: "状态",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "rank",
        name: "Rank",
        component: () => import("@/views/Rank.vue"),
        meta: {
          title: "排名",
          roles: [RoleEnum.UN_LOGIN],
          // icon: "SettingOutlined",
        },
      },
      {
        path: "faqs",
        name: "Faqs",
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
