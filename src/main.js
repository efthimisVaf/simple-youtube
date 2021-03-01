import Vue from 'vue';
import './plugins/bootstrap-vue';
import JwPagination from 'jw-vue-pagination';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.component('jw-pagination', JwPagination);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
