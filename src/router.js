import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Feed from './views/Feed';
import Login from './views/Login';
import Perfil from './views/Perfil';
import Registro from './views/Registro';
import PostSingle from './views/PostSingle';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home,
            meta:{logueado:true},
        },
        {
            path:'/feed/:username',
            name:'feed',
            component: Feed,
            meta:{logueado:true},

        },
        {
            path:'/login',
            name:'login',
            component: Login,
            meta:{ logueado: false},
        },
        {
            path:'/perfil',
            name:'perfil',
            component: Perfil,
            meta:{logueado:true},
        },
        {
            path:'/registro',
            name:'registro',
            component: Registro,
            meta:{logueado: false},
        },
        {
            path: 'post/:postID',
            name: 'post',
            component: PostSingle,
            meta: {logueado: true},
        }
    ]
})