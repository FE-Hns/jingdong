import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
interface CartType {
  shopId: string;
  productId: string;
  productInfo: any;
}

interface CartList {
  [propName: string]: {
    shopName: string;
    productList: {
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
  };
}

// 定义cartList类型
const cartList: CartList = {};

export default createStore({
  state: {
    // cartList: {
    //   shopId: {
    //     shopName: '沃尔玛',
    //     productList: {
    //       productId: {
    //         currentPrice: 57.06,
    //         id: 8131948913642784,
    //         imgUrl: "http://dummyimage.com/68x68/50B347/FFF&text=FastMock",
    //         originalPrice: 21.73,
    //         sales: 66,
    //         title: "清者权因",
    //         count: 0,
    //       },
    //     }
    //   },
    // },
    cartList,
    activeIndex: 0,
  },
  mutations: {
    // 添加商品到购物车
    addToCart(state, data: CartType) {
      const { shopId, productId, productInfo } = data;
      const setValue = () => {
        state.cartList[shopId]["productList"][productId].check = true;
        state.cartList[shopId]["productList"][productId].count += 1;
        state.cartList[shopId]["productList"][productId].currentPrice = productInfo.currentPrice;
        state.cartList[shopId]["productList"][productId].id = productInfo.id;
        state.cartList[shopId]["productList"][productId].imgUrl = productInfo.imgUrl;
        state.cartList[shopId]["productList"][productId].originalPrice = productInfo.originalPrice;
        state.cartList[shopId]["productList"][productId].sales = productInfo.sales;
        state.cartList[shopId]["productList"][productId].title = productInfo.title;
      };
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = {
          shopName: "",
          productList: {},
        };
        state.cartList[shopId]["productList"][productId] = {
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
        if (!state.cartList[shopId]["productList"][productId]) {
          state.cartList[shopId]["productList"][productId] = {
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
      console.log(state.cartList);
    },
    // 删除购物车中的商品
    delToCart(state, data: CartType) {
      const { shopId, productId } = data;
      state.cartList[shopId]["productList"][productId].count -= 1;
      if (state.cartList[shopId]["productList"][productId].count <= 0) {
        delete state.cartList[shopId]["productList"][productId];
      }
    },
    // 修改商品选中状态
    changeProductCheck(state, data) {
      const { shopId, productId } = data;
      const product = state.cartList[shopId]["productList"][productId];
      product.check = !product.check;
    },
    // 全选
    selectAll(state, data) {
      const { shopId } = data;
      const products = state.cartList[shopId]["productList"];
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
    // 设置商铺名称
    setShopName(state, data) {
      const { shopId, shopInfo } = data;
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = {
          shopName: "",
          productList: {},
        };
      }
      state.cartList[shopId].shopName = shopInfo.value.name;
    },
    // 设置activeIndex
    setActiveIndex(state, activeIndex) {
      state.activeIndex = activeIndex;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
