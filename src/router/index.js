import { createRouter, createWebHashHistory } from "vue-router";

// const routes =

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/home.vue"),
    },
    ,
    {
      path: "/collect",
      name: "collect",
      component: () => import("@/views/collect/collect.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/order/order.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/city",
      name: "city",
      component: () => import("@/views/city/city.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "notFound",
      component: () => import("@/components/not-found.vue"),
    },
  ],
});

export default router;
