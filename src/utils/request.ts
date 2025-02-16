//@ts-ignore
import { Message } from "@arco-design/web-vue";
import axios from "axios";

export enum ResponseCode {
  SUCCESS = 0,
  SYSTEM_ERROR = 50000,
  PARAMS_ERROR = 40000,
  NOT_LOGIN_ERROR = 40100,
  NOT_PERMISSION_ERROR = 40300,
  NOT_FOUND_ERROR = 40400,
  OPERATION_ERROR = 50001,
}
const codeMessage = {
  50000: "系统内部异常",
  40000: "请求参数错误",
  40100: "未登录",
  40300: "无权限",
  40400: "请求数据不存在",
  50001: "操作失败",
};
export interface BaseResponse {
  code: number;
  message: string;
  data: any;
}
const request = axios.create({
  // Your custom Axios instance config
  baseURL: "http://127.0.0.1:8101",
  timeout: 3000,
  withCredentials: true,
});
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应拦截器
request.interceptors.response.use(
  function (response) {
    const data = response.data;

    if (
      data.code == ResponseCode.NOT_LOGIN_ERROR &&
      !window.location.hash.includes("/login")
    ) {
      window.localStorage.setItem("isLogin", "false");
      Message.error({ content: data.message });
      window.location.href = "/user/login";
    } else if (data.code != ResponseCode.SUCCESS) {
      Message.error({ content: data.message });
    }
    return data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
