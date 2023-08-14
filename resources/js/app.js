import './bootstrap';

import {createApp} from 'vue'
import axios from 'axios';


import App from './app.vue'

const Vue = window.vue;


import * as VueRouter from 'vue-router';  

import {routes} from './routes';

import VueAxios from 'vue-axios';




// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

createApp(App).use(router).use(VueAxios, axios).mount('#app')
