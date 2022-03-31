/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import App from './pages/App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
// import i18n from '@/lang';
// import store from '@/store';

new Vue({
    el: '#app',
    vuetify,
    router,
    // store,
    // i18n,
    render: h => h(App),
});