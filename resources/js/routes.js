import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import AllProduct1 from './components/AllProduct1.vue';
import ViewProduct from './components/ViewProduct.vue';


import Sample from './components/Sample.vue';



// const AllProduct =() => import("./components/AllProduct.vue");
 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name:'viewProduct',
        path:'/product/:id',
        component: ViewProduct

    },

    {
        name: 'sample',
        path: '/sample',
        component: AllProduct1
    },

    {
        name: 'sample1',
        path: '/sample1',
        component: Sample
    }
];