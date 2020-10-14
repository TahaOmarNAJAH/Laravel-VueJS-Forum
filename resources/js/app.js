import Vuetify from '../plugins/vuetify';
import MarkdownEditor from '../plugins/MarkdownEditor';
import router from './router';
import AppHome from './components/AppHome';
import User from './helpers/User';
import md from 'marked';

require('./bootstrap');
window.Vue = require('vue');
window.User = User;
window.EventBus = new Vue();
window.md =md;


// global register


// Vue.use(VueSimplemde);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
    components: {
        AppHome
    },
    router
});
