// import { h } from "vue";

/**
 * @name 导航菜单生成
 */
function generateMenu(routes: any[], userRole: string) {
  return routes.reduce((acc, route) => {
    if (route.children && !route.hideInMenu) {
      route.children.forEach((subRoute: any) => {
        if (!subRoute.hideInMenu && subRoute.meta) {
          if (subRoute.meta.roles.some((role: string) => userRole == role)) {
            acc.push({
              key: subRoute.name as string,
              label: subRoute?.meta?.title,
              title: subRoute?.meta?.title,
              //   icon: () => h(route?.meta?.icon),
            });
          }
        }
      });
    } else {
      if (!route.hideInMenu && route.meta) {
        if (route.meta.roles.some((role: string) => userRole == role)) {
          acc.push({
            key: route.name,
            label: route?.meta?.title,
            title: route?.meta?.title,
            icon: route?.meta?.icon,
          });
        }
      }
    }
    return acc;
  }, []);
}

// 使用函数生成导航菜单
export default generateMenu;
