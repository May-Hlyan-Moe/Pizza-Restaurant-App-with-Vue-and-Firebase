import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MenuView from '@/views/MenuView.vue'
import AdminView from '@/views/Admin.vue'
import History from '@/components/History.vue'
import Delivery from '@/components/Delivery.vue'
import Locations from '@/components/Locations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        delivery: Delivery,
        locations: Locations
      }
    },
    {
      path: "/about",
      name: "aboutLink",
      component: AboutView,
      children: [
        {path: "history", name: "historyLink", component: History},
        {path: "delivery", name: "deliveryLink", component: Delivery},
        {path: "locations", name: "locationsLink", component: Locations}
      ]
    },
    {
      path: "/menu",
      name: "menuLink",
      component: MenuView
    },
    {
      path: "/admin",
      name: "adminLink",
      component: AdminView
    }
  ],
})

export default router
