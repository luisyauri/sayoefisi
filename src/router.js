import Vue from 'vue'
import Router from 'vue-router'

import Login from "./views/Login";
import Unayoe from "./views/unayoe/Unayoe";
import Estudiante from "./views/estudiante/Estudiante";
import Logout from "./views/Logout";
import Test from "./views/Test";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'login',
      component:Login,
      meta:{
        requiresVisitante: true,
      }
    },
    {
      path:'/unayoe',
      name:'unayoe',
      component:Unayoe,
      meta:{
        requiresUnayoe: true,
      }
    },
    {
      path:'/estudiante',
      name:'estudiante',
      component:Estudiante,
      meta:{
        requiresEstudiante: true,
      }
    },
    {
      path:'/logout',
      name:'logout',
      component:Logout
    },
    {
      path:'/test',
      name:'test',
      component:Test,
      meta:{
        requiresUnayoe: true,
      }
    }
  ],
})
