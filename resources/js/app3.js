import './bootstrap';
import {createApp} from 'vue'
import App from './app.vue'

// import * as Vue from 'vue';
// import Vue from 'vue';



const Vue = window.vue;




import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
//import * as VueRouter from 'vue-router';  

import axios from 'axios';
import { routes } from './routes';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);


 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes
// })


createApp(App).mount("#app")



// import './bootstrap';

// import {createApp} from 'vue'
// import App from './app.vue'

// const Vue = window.vue;


// import * as VueRouter from 'vue-router';  

// import {routes} from './routes';

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes
// })

// createApp(App).use(router).mount('#app')




