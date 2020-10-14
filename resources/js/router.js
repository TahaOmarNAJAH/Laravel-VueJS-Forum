import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './auth/login';
import signup from './auth/signup';
import forum from './components/forum';
import logout from './auth/logout';
import read from './components/read';
import create from './components/Create'
//to install vueRouter as a plugin for vue
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login', name: 'login', component: login,

        },
        {
            path: '/logout', name: 'logout', component: logout,

        },
        {
            path: '/signup', name: 'signup', component: signup,

        },
        {
            path: '/forum', name: 'forum', component: forum,

        },
        {
            path: '/question/:slug', name: 'read', component: read,

        },
        {
            path: '/ask', name: 'create', component: create,

        },
    ]
});