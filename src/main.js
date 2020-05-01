import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);


import Splash from './components/splash/Splash';
import Login from './components/splash/Login';
import Register from './components/splash/Register';

const routes = [
  { path: '/', component: Splash, children: [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
  ] }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
