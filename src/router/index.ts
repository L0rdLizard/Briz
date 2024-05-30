import { createRouter, createWebHistory } from 'vue-router';

const baseUrl = import.meta.env.VITE_BUILD_ADDRESS || '';

export const routes = [
  {
    path: `${baseUrl}/`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/MainPage.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/tickets`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      {
        path: "",
        name: "Tickets",
        component: () => import("@/views/Tickets.vue"),
      },
    ],
  },
  {
    path: `${baseUrl}/info`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      {
        path: "",
        name: "Info",
        component: () => import("@/views/Info.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { top: 0 };
  }
});

