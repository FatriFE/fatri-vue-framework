/** flexible layout */
// import 'lib-flexible/flexible';

/** compatible */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/** main dependencies */
import Vue from 'vue';

/** plugin */
import modal from '@/plugins/modal/index.js';
import msg from '@/plugins/msg/index.js';
import api from '@/api/index.js';

/** i18n */
import i18n from '@/i18n';

/** UI */
import ElementUI from 'element-ui';
import App from '@/App.vue';
import menuAside from '@/menu/aside';

/** vuex */
import store from '@/store';

/** router */
import router from '@/router';

/** style */
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css';
import '@/assets/styles/animate.css';
import '@/assets/styles/element-overwrite.less';
import '@/assets/styles/index.less';

Vue.use(ElementUI);

Vue.use(api);
Vue.use(modal, { i18n, store });
Vue.use(msg);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  created() {
    this.$store.commit('system/aside/ASIDE_LIST', menuAside);
  },
}).$mount('#app');