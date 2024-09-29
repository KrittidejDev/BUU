import apiService from "../apiService";

const apiPath = "/api";

export const userService = {
  POST_LOGIN: (params) => {
    return apiService.post(`${apiPath}/accounts/login`, params);
  },
};
