import { http } from "@/utils/http";
import {stringify} from "qs";

export type UserResult = {
  success: boolean;
  data: {
    /** 用户名 */
    username: string;
    /** 当前登陆用户的角色 */
    roles: Array<string>;
    /** `token` */
    token: string;
    /** 用于调用刷新`token`的接口时所需的`token` */
    refreshToken: string;
    /** `token`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    token: string;
    /** 用于调用刷新`token`的接口时所需的`token` */
    refreshToken: string;
    /** `token`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/api/v1/login/access-token", { data }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
