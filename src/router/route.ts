import { staticApps, dynamicApps } from "../microApps";
export default [
  {
    path: "/",
    redirect: { name: "home" },
    meta: { title: "首页" },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../components/HelloWorld.vue"),
      },
      /** route of micro apps */
      ...staticApps.map((app) => ({
        name: app.name,
        path: app.activeRule,
        component: () => import("../components/StaticContainer.vue"),
      })),
      ...dynamicApps.map((app) => ({
        name: app.name,
        path: app.activeRule,
        component: () => import("../components/DynamicContainer.vue"),
      })),
    ],
  },
];
