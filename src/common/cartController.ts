import { Store } from "vuex";
export const cartController = (store: Store<any>) => {
  const addToCart = (shopId: string, productId: string, shopInfo: any) => {
    store.commit("addToCart", { shopId, productId, shopInfo });
  };
  const delToCart = (shopId: string, productId: string, shopInfo: any) => {
    store.commit("delToCart", { shopId, productId, shopInfo });
  };
  const changeProductCheck = (shopId: string, productId: string) => {
    store.commit("changeProductCheck", { shopId, productId });
  };
  return { addToCart, delToCart, changeProductCheck };
};
