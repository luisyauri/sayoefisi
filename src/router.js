import Vue from 'vue'
import Router from 'vue-router'

import Login from "./views/Login";
import Unayoe from "./views/unayoe/Unayoe";
import Estudiante from "./views/estudiante/Estudiante";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/unayoe',
      name:'unayoe',
      component:Unayoe
    },
    {
      path:'/estudiante',
      name:'estudiante',
      component:Estudiante
    }
  ]
})
