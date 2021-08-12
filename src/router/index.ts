import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home/Index.vue");
const Login = () => import(/* webpackChunkName: "login" */ "../views/Login/Index.vue");
const Register = () => import(/* webpackChunkName: "register" */ "../views/Register/Index.vue");
const Shop = () => import(/* webpackChunkName: "shop" */ "../views/Shop/Index.vue");
const MyCart = () => import(/* webpackChunkName: "cart" */ "../views/Cart/Index.vue");
const Order = () => import(/* webpackChunkName: "order" */ "../views/Order/Index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "Cart",
    component: MyCart,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const isLoginPageOrRegisterPage = to.name === "Login" || to.name === "Register";
  isLogin || isLoginPageOrRegisterPage ? next() : next({ name: "Login" });
});

export default router;
