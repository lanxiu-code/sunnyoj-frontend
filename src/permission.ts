import router from "./router";
import { RoleEnum } from "./enum/RoleEnum";
import { useUserStore } from "./store";
// 前置路由守卫
router.beforeEach(async (to, from, next) => {
  // 设置标题
  document.title = `${to.meta.title as string}-晴练网` || "晴练网";
  const userStore = useUserStore();
  const hasPermission = checkPermission(
    to.meta.roles as string[],
    userStore.currentUser.userRole
  );
  if (hasPermission) {
    next();
  } else {
    next({ name: "Forbidden" });
  }
});
function checkPermission(pageRoles: string[], userRole: string) {
  if (pageRoles.includes(RoleEnum.UN_LOGIN)) {
    return true;
  } else if (userRole === RoleEnum.BAN) {
    return false;
  } else if (pageRoles && pageRoles.length > 0) {
    return pageRoles.includes(userRole);
  } else {
    return true;
  }
}
