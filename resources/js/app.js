import Vuetify from '../plugins/vuetify';
import router from './router';  
import AppHome from './components/AppHome';
import User from './helpers/User';

require('./bootstrap');

window.Vue = require('vue');
window.User = User;


const app = new Vue({
    vuetify:Vuetify,
    el: '#app',
    components:{
        AppHome
    },
    router
});
