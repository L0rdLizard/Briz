import { createRouter, createWebHistory } from "vue-router";

const baseUrl = import.meta.env.VITE_BUILD_ADDRESS;

export const routes = [
  {
    path: `${baseUrl}/`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/views/MainPage.vue") }
    ],
  },
  {
    path: `${baseUrl}/about`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/About.vue") }
    ],
  },
  {
    path: `${baseUrl}/contacts`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      { path: "", name: "Contacts", component: () => import("@/views/Contacts.vue") },
    ],
  },
  {
    path: `${baseUrl}/tickets`,
    component: () => import("@/layouts/Main.vue"),
    children: [
      { path: "", name: "Tickets", component: () => import("@/views/Tickets.vue") },
    ],
  },
];

// export const router = createRouter({
//   history: createWebHistory(),
//   routes: routes,
// });

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

// export default router;