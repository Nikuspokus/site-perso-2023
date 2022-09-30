import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import AboutView from "../views/AboutView.vue";
import MyProjects from "../views/MyProjects.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "aboutme",
      component: AboutMe,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/projets",
      name: "projets",
      component: MyProjects,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
