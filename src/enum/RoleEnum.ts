/**
 * @description 权限枚举
 */
export enum RoleEnum {
  /**
   * 管理员
   */
  ADMIN = "admin",

  /**
   * 普通用户
   */
  USER = "user",
  /**
   * VIP用户
   */
  VIP = "vip",
  /**
   * 封禁用户
   */
  BAN = "ban",

  /**
   * 未登录
   */
  UN_LOGIN = "un_login",
}

export const RoleMap = new Map([
  [RoleEnum.ADMIN, "管理员"],
  [RoleEnum.USER, "普通用户"],
  [RoleEnum.VIP, "VIP用户"],
  [RoleEnum.BAN, "封禁用户"],
]);
