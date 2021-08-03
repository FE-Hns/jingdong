import { Store } from "vuex";
export const cartController = (store: Store<any>) => {
  // 添加购物车
  const addToCart = (shopId: string, productId: string, shopInfo: any) => {
    store.commit("addToCart", { shopId, productId, shopInfo });
  };
  // 从购物车中删除
  const delToCart = (shopId: string, productId: string, shopInfo: any) => {
    store.commit("delToCart", { shopId, productId, shopInfo });
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
  return { addToCart, delToCart, changeProductCheck, selectAll, clearCart };
};
