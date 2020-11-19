<template>
    <div class="menuSab">
        <router-link class="link" :to="{path:'/'}">Home</router-link>
        <router-link class="link" :to="{path: '/feed' , name: 'feed', params: {username: usuarioLog}}">Feed</router-link>
        <router-link class="link" :to="{path:'/login'}">Login</router-link>
        <router-link class="link" :to="{path:'/perfil'}">Perfil</router-link>
        <router-link class="link" :to="{path:'/registro'}">Registro</router-link>
    </div>

</template>

<script>
export default {
    name:'MenuSab',
    data(){
        return{

            usuarioLog: window.sessionStorage.getItem('username')
        }
    },


}
</script>

<style>
.menuSab{
    text-align: center;
}
.link{
    padding: 0 25px;
    color: #f0e0e0;
    text-decoration: none;
}
.link:hover{
    background-color: #95a1ad;
}


</style>