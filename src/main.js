import Vue from 'vue';
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueCompositionAPI from '@vue/composition-api';

import router from './router';
import store from './store';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';

// Global Components
import './global-components';

// 3rd party plugins
import '@/libs/portal-vue';
import '@/libs/toastification';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Composition API
Vue.use(VueCompositionAPI);

// import core styles
require('@core/scss/core.scss');

// import assets styles
require('@/assets/scss/style.scss');

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app');
