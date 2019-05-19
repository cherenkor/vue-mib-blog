import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: () =>
        import("@/pages/Post")
    },
    {
      path: "/new-post",
      name: "new-post",
      component: () =>
        import("@/pages/NewPost")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("@/pages/About")
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () =>
        import("@/pages/Contacts")
    },
    {
      path: "*",
      redirect: { name: 'home' }
    }
  ]
});
