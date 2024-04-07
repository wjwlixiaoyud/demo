import VueRouter from "vue-router";
import Vue from "vue";
import hello from "../components/hello.vue";
import Farmtools from "../components/Farmtools.vue";
import My from "../components/My.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: hello },
    { path: "/Hello", component: hello },
    { path: "/farmtools", component: Farmtools },
    { path: "/my", component: My },
  ],
});

export default router;
