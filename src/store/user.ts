import { defineStore } from "pinia";
import { reactive } from "vue";
const userStore = defineStore("user", () => {
  const currentUser = reactive({
    id: "23123123",
    userAccount: "zhangsan",
    userName: "张三",
    userAvatar:
      "https://img0.baidu.com/it/u=2653686457,2201625642&fm=253&app=138&size=w931&n=0&f=JPEG",
    userRole: "ban",
    userEmail: "zhangsan@qq.com",
    userPhone: "12345678901",
    userAddress: "北京",
  });

  const login = () => {
    // todo 登录方法
  };
  const logout = () => {
    // todo 退出登录
  };
  return {
    currentUser,
    login,
    logout,
  };
});
export default userStore;
