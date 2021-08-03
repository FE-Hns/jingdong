import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
interface CartType {
  shopId: string;
  productId: string;
  shopInfo: any;
}

interface CartList {
  [propName: string]: {
    [propName: string]: {
      currentPrice?: number;
      id?: string;
      imgUrl?: string;
      originalPrice?: number;
      sales?: number;
      title?: string;
      count: number;
      check: boolean;
    };
  };
}

// 定义cartList类型
const cartList: CartList = {};

export default createStore({
  state: {
    // cartList: {
    //   // shopId: {
    //   //   productId: {
    //   //     currentPrice: 57.06,
    //   //     id: 8131948913642784,
    //   //     imgUrl: "http://dummyimage.com/68x68/50B347/FFF&text=FastMock",
    //   //     originalPrice: 21.73,
    //   //     sales: 66,
    //   //     title: "清者权因",
    //   //     count: 0,
    //   //   },
    //   // },
    // },
    cartList,
  },
  mutations: {
    // 添加商品到购物车
    addToCart(state, data: CartType) {
      const { shopId, productId, shopInfo } = data;
      const setValue = () => {
        state.cartList[shopId][productId].check = true;
        state.cartList[shopId][productId].count += 1;
        state.cartList[shopId][productId].currentPrice = shopInfo.currentPrice;
        state.cartList[shopId][productId].id = shopInfo.id;
        state.cartList[shopId][productId].imgUrl = shopInfo.imgUrl;
        state.cartList[shopId][productId].originalPrice = shopInfo.originalPrice;
        state.cartList[shopId][productId].sales = shopInfo.sales;
        state.cartList[shopId][productId].title = shopInfo.title;
      };
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = {};
        state.cartList[shopId][productId] = {
          currentPrice: 0,
          id: "",
          imgUrl: "",
          originalPrice: 0,
          sales: 0,
          title: "",
          count: 0,
          check: true,
        };
        setValue();
      } else {
        if (!state.cartList[shopId][productId]) {
          state.cartList[shopId][productId] = {
            currentPrice: 0,
            id: "",
            imgUrl: "",
            originalPrice: 0,
            sales: 0,
            title: "",
            count: 0,
            check: true,
          };
          setValue();
        } else {
          setValue();
        }
      }
    },
    // 删除购物车中的商品
    delToCart(state, data: CartType) {
      const { shopId, productId } = data;
      state.cartList[shopId][productId].count -= 1;
      if (state.cartList[shopId][productId].count <= 0) {
        delete state.cartList[shopId][productId];
      }
    },
    // 修改商品选中状态
    changeProductCheck(state, data) {
      const { shopId, productId } = data;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },
    // 全选
    selectAll(state, data) {
      const { shopId } = data;
      const products = state.cartList[shopId];
      let allChecked = true;
      for (const productId in products) {
        const product = products[productId];
        if (!product.check) {
          allChecked = false;
          break;
        }
      }
      if (allChecked) {
        for (const productId in products) {
          const product = products[productId];
          product.check = false;
        }
      } else {
        for (const productId in products) {
          const product = products[productId];
          product.check = true;
        }
      }
    },
    // 清空购物车
    clearCart(state) {
      state.cartList = {};
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
