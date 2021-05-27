require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
window.Vue = Vue;

Vue.component('layouts', require('./components/Layouts.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('example', require('./components/Example.vue').default);

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});