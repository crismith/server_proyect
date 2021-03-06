import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/apexcharts';
import './plugins/modal'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
