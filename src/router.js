import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditInvoice from './views/EditInvoice.vue'
import ViewInvoice from './views/ViewInvoice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/view/:id',
      name: 'view',
      component: ViewInvoice
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditInvoice
    }
  ]
})
