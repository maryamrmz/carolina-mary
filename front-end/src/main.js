import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import { routes } from './routes';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
