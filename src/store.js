import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:8000/api/v1'

export default new Vuex.Store({
  state: {
      token:localStorage.getItem('access_token')||null,
  },
  getters:{
      loggedIn(state){
          return state.token !== null;
      }
  },
  mutations: {
      retrieveToken(state,token){
          state.token=token;
      },
      destroyToken(state){
          state.token=null;
      }
  },
  actions: {
    destroyToken(context){
        //axios.defaults.headers.cammon['Authorization'] = 'Bearer '+context.state.token;

        if(context.getters.loggedIn){
            return new Promise((resolve,reject)=>{
                axios.post('/logout')
                    .then(response => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        resolve(response);
                        // console.log(response);
                    })
                    .catch(error => {
                        localStorage.removeItem('access_token');
                        context.commit('destroyToken');
                        reject(error);
                        // eslint-disable-next-line
                        console.log(error);
                    });
            })
        }
    },
    retrieveToken(context, credentials){
        return new Promise((resolve,reject)=>{
            axios.post('/auth/login', {
                correo: credentials.correo,
                contrasenha: credentials.contrasenha,
            })
                .then(function (response) {
                    const token = response.data.token;
                    localStorage.setItem('access_token',token);
                    context.commit('retrieveToken',token);
                    resolve(response);
                    // console.log(response);
                })
                .catch(function (error) {
                    // eslint-disable-next-line
                    console.log(error);
                    reject(error);
                });
        })
    }
  }
})
