import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Feed from './views/Feed';
import Login from './views/Login';
import Perfil from './views/Perfil';
import Registro from './views/Registro'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/feed',
            name:'feed',
            component: Feed

        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/perfil',
            name:'perfil',
            component: Perfil
        },
        {
            path:'/registro',
            name:'registro',
            component: Registro
        }
    ]
})