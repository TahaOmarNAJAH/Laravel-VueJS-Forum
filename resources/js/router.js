import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './auth/login';
import signup from './auth/signup';
import forum from './components/forum';
import logout from './auth/logout';

//to install vueRouter as a plugin for vue
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login', name: 'login', component: login,

        },
        {
            path: '/logout', name: 'forum', component: logout,

        },
        {
            path: '/signup', name: 'signup', component: signup,

        },
        {
            path: '/forum', name: 'logout', component: forum,

        },
    ]
});