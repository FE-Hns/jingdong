interface ApiType {
  [key: string]: string;
}
const api: ApiType = {
  login: "/user/login",
  register: "/user/register",
  nearbyList: "/nearby/hotList",
};

export default api;
