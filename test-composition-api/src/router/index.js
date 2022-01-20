import { createRouter, createWebHistory } from "vue-router";
import Segitiga from "../views/Segitiga.vue";

const routes = [
  {
    path: "/",
    name: "Segitiga",
    component: Segitiga,
  },
  {
    path: "/belah-ketupat",
    name: "Belah-Ketupat",
    component: () => import("../views/Belah-Ketupat.vue"),
  },
  {
    path: "/trapesium",
    name: "Trapesium",
    component: () => import("../views/Trapesium.vue"),
  },
  {
    path: "/jajar-genjang",
    name: "Jajar-Genjang",
    component: () => import("../views/Jajar-Genjang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
