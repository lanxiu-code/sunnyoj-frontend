import router from "./router";

// 前置路由守卫
router.beforeEach(async (to, from, next) => {
  console.log(to.meta.title);

  // 设置标题
  document.title = `${to.meta.title as string}-晴练网` || "晴练网";

  next();
});
