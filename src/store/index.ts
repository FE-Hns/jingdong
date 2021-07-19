import { createStore } from "vuex";
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
    addToCart(state, data: CartType) {
      const { shopId, productId, shopInfo } = data;
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
        };
        state.cartList[shopId][productId].count = 1;
        state.cartList[shopId][productId].currentPrice = shopInfo.currentPrice;
        state.cartList[shopId][productId].id = shopInfo.id;
        state.cartList[shopId][productId].imgUrl = shopInfo.imgUrl;
        state.cartList[shopId][productId].originalPrice = shopInfo.originalPrice;
        state.cartList[shopId][productId].sales = shopInfo.sales;
        state.cartList[shopId][productId].title = shopInfo.title;
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
          };
          state.cartList[shopId][productId].count = 1;
          state.cartList[shopId][productId].currentPrice = shopInfo.currentPrice;
          state.cartList[shopId][productId].id = shopInfo.id;
          state.cartList[shopId][productId].imgUrl = shopInfo.imgUrl;
          state.cartList[shopId][productId].originalPrice = shopInfo.originalPrice;
          state.cartList[shopId][productId].sales = shopInfo.sales;
          state.cartList[shopId][productId].title = shopInfo.title;
        } else {
          state.cartList[shopId][productId].count += 1;
          state.cartList[shopId][productId].currentPrice = shopInfo.currentPrice;
          state.cartList[shopId][productId].id = shopInfo.id;
          state.cartList[shopId][productId].imgUrl = shopInfo.imgUrl;
          state.cartList[shopId][productId].originalPrice = shopInfo.originalPrice;
          state.cartList[shopId][productId].sales = shopInfo.sales;
          state.cartList[shopId][productId].title = shopInfo.title;
        }
      }
      console.log(state.cartList);
    },
  },
  actions: {},
  modules: {},
});
