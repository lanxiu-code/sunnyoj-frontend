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
    component: () => import("@/layouts/BasicLayout/BasicLayout.vue"),
    children: [
      {
        path: "account",
        name: "Account",
        hideInMenu: true,
        component: () => import("@/views/Account/Account.vue"),
        meta: {
          title: "个人信息",
          roles: [RoleEnum.USER],
        },
      },
      {
        path: "login",
        name: "Login",
        hideInMenu: true,
        component: () => import("@/views/Login/Login.vue"),
        meta: {
          title: "登录",
          roles: [RoleEnum.UN_LOGIN],
        },
      },
      {
        path: "register",
        name: "Register",
        hideInMenu: true,
        component: () => import("@/views/Register/Register.vue"),
        meta: {
          title: "注册",
          roles: [RoleEnum.UN_LOGIN],
        },
      },
      {
        path: "viewnews/:id",
        name: "Viewnews",
        hideInMenu: true,
        component: () => import("@/views/Viewnews/Viewnews.vue"),
        meta: {
          title: "公告",
          roles: [RoleEnum.UN_LOGIN],
        },
      },
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
        meta: {
          title: "首页",
          roles: [RoleEnum.USER],
          icon: "icon-shouye",
        },
      },
      {
        path: "questionBank",
        name: "QuestionBank",
        component: () => import("@/views/QuestionBank/QuestionBank.vue"),
        meta: {
          title: "题库",
          roles: [RoleEnum.UN_LOGIN],
          icon: "icon-icon_xiaobentiku",
        },
      },
      {
        path: "contest",
        name: "Contest",
        component: () => import("@/views/Contest/Contest.vue"),
        meta: {
          title: "比赛",
          roles: [RoleEnum.UN_LOGIN],
          icon: "icon-bisai",
        },
      },
      {
        path: "/contest/:id",
        name: "ContestDetail",
        component: () => import("@/views/Contest/ContestDetail.vue"),
        hideInMenu: true,
        meta: {
          title: "比赛详情",
          roles: [RoleEnum.UN_LOGIN],
        },
      },
      {
        path: "status",
        name: "Status",
        component: () => import("@/views/Status/Status.vue"),
        meta: {
          title: "状态",
          roles: [RoleEnum.UN_LOGIN],
          icon: "icon-shishizhuangtai",
        },
      },
      {
        path: "rank",
        name: "Rank",
        component: () => import("@/views/Rank/Rank.vue"),
        meta: {
          title: "排名",
          roles: [RoleEnum.UN_LOGIN],
          icon: "icon-paiming",
        },
      },
      {
        path: "faqs",
        name: "Faqs",
        component: () => import("@/views/Faqs/Faqs.vue"),
        meta: {
          title: "常见问题",
          roles: [RoleEnum.UN_LOGIN],
          icon: "icon-changjianwenti",
        },
      },
    ],
  },
  {
    path: "/problems/:id",
    name: "Problems",
    hideInMenu: true,
    component: () => import("@/views/Problems/Problems.vue"),
    meta: {
      title: "题目",
      roles: [RoleEnum.UN_LOGIN],
    },
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    hideInMenu: true,
    component: () => import("@/views/403/index.vue"),
    meta: {
      title: "禁止访问",
      roles: [RoleEnum.UN_LOGIN],
    },
  },
] as RouteRecordRaw[];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
