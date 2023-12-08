const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "/", redirect: "/login" },
      { path: "login", component: () => import("src/pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("src/pages/RegisterPage.vue"),
      },
    ],
    meta: { auth: false },
  },
  {
    path: "/app",
    component: () => import("layouts/EditorLayout.vue"),
    children: [
      // to do the correct rout  edit/:id
      { path: "edit", component: () => import("pages/EditorPage.vue") },
      {
        path: "create",
        component: () => import("pages/EditorPage.vue"),
      },

      { path: "", component: () => import("pages/PlayerPage.vue") },
    ],
    meta: { auth: true },
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
