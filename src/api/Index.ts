interface ApiType {
  [key: string]: string;
}
const api: ApiType = {
  login: "/user/login",
  register: "/user/register",
  nearbyList: "/nearby/hotList",
  getShopInfo: "/shop",
};

export default api;
