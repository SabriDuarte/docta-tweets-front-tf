<template>
    <div class="menuSab">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/feed">Feed</router-link>
        <router-link class="link" to="/login">Login</router-link>
        <router-link class="link" to="/perfil">Perfil</router-link>
        <router-link class="link" to="/registro">Registro</router-link>
    </div>

</template>

<script>
export default {
    name:'MenuSab',
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