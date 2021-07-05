interface ApiType {
  [key: string]: string;
}
const api: ApiType = {
  login: "/user/login", // 用户登录
  register: "/user/register", // 用户注册
  nearbyList: "/nearby/hotList", // 获取附近店铺
  getShopInfo: "/shop", // 获取商铺信息
  getProductsByCategory: "/shop", // 根据商品分类获取商品列表
};

export default api;
