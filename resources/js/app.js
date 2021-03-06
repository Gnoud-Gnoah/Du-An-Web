require('./bootstrap');
window.Vue = require('vue');
import Vuex from 'vuex'
import bootstrap from 'bootstrap'
import storeVuex from './store/index'
import filter from './filter'
Vue.use(Vuex, bootstrap)

const store = new Vuex.Store(storeVuex)

Vue.component('main-app', require('./components/MainApp.vue').default);
Vue.component('view-motel', require('./components/ViewMotel.vue').default);
Vue.component('rule', require('./components/Rule.vue').default);
Vue.component('welcome', require('./components/Home.vue').default);
Vue.component('admin', require('./components/Admin.vue').default);
Vue.component('owner', require('./components/Owner.vue').default);
Vue.component('post', require('./components/Post.vue').default);

const app = new Vue({
    el: '#app',
    store
});