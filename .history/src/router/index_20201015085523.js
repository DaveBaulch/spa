import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home Page - Example SPA'
    }
  },
  {
    path: "/hero",
    name: "Hero",
    meta: {
      title: 'Hero component'
    },   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hero.vue")
  },
  {
    path: "/carousel",
    name: "Carousel",
    meta: {
      title: 'Carousel component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Carousel.vue")
  },
  {
    path: "/quote",
    name: "Quote",
    meta: {
      title: 'Quote component'
    },   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quote.vue")
  }
];

const router = new VueRouter({
  routes
});

router.afterEach((to) => {
  Vue.nextTick( () => {
    document.title = to.meta.title ? to.meta.title : 'default title';
  });
});

export default router;
