import Vue from "vue";
import VueRouter from "vue-router";
import StartHere from "@/views/StartHere.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "StartHere",
    component: StartHere,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
