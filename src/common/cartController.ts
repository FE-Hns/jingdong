// 购物车相关的通用逻辑
import { Ref } from "vue";
import { Store } from "vuex";
export const cartController = (store: Store<any>) => {
  // 添加购物车
  const addToCart = (shopId: string, productId: string, productInfo: any) => {
    store.commit("addToCart", { shopId, productId, productInfo });
  };
  // 从购物车中删除
  const delToCart = (shopId: string, productId: string, productInfo: any) => {
    store.commit("delToCart", { shopId, productId, productInfo });
  };
  // 是否勾选中
  const changeProductCheck = (shopId: string, productId: string) => {
    store.commit("changeProductCheck", { shopId, productId });
  };
  // 切换全选
  const selectAll = (shopId: string) => {
    store.commit("selectAll", { shopId });
  };
  // 清空购物车
  const clearCart = () => {
    store.commit("clearCart");
  };
  // 设置商铺名称
  const setShopName = (shopId: string, shopInfo: Ref) => {
    store.commit("setShopName", { shopId, shopInfo });
  };
  return { addToCart, delToCart, changeProductCheck, selectAll, clearCart, setShopName };
};
