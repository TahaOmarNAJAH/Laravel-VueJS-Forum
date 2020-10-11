import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './auth/login';

//to install vueRouter as a plugin for vue
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            //path: '/',name: 'home',component:App,
            path: '/login',name: 'login',component:login,
        }
    ]
});