import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Dinosaurs from 'components/Dinosaurs/Dinosaurs'
import Fundamentals from 'components/Fundamentals/Fundamentals'
import Computed from 'components/Fundamentals/Computed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dinosaurs',
      name: 'Dinosaurs',
      component: Dinosaurs
    },
    {
      path: '/fundamentals',
      name: 'Fundamentals',
      component: Fundamentals
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    }
  ]
})
