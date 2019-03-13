import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import jwt_decode from 'jwt-decode'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUnayoe)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name:'login'
      })
    }else if(store.getters.loggedIn && jwt_decode(store.state.token).rol.id===2){
      next({
        name:'estudiante',
      })
    } else {
      next()
    }
  }else if(to.matched.some(record => record.meta.requiresEstudiante)){
    if (!store.getters.loggedIn) {
      next({
        name:'login'
      })
    }else if(store.getters.loggedIn && jwt_decode(store.state.token).rol.id===542687){
      next({
        name:'unayoe',
      })
    } else {
      next()
    }
  }else if(to.matched.some(record =>record.meta.requiresVisitante)){
    if(store.getters.loggedIn && jwt_decode(store.state.token).rol.id===542687){
      next({
        name:'unayoe',
      })
    }else if(store.getters.loggedIn && jwt_decode(store.state.token).rol.id===2){
      next({
        name:'estudiante',
      })
    }else{
      next()
    }
  }else {
    next() // make sure to always call next()!
  }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
