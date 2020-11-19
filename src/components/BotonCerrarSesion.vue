<template>
    <div>
        <button @click.prevent='cerrarSesion'>Cerrar Sesión</button>
    </div>
</template>

<script>
export default {
    name:'BotonCerrarSesion',
    methods: {
        cerrarSesion(){
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            this.$router.push({name: 'login'})
        }
    },
}
</script>

<style scoped>
    button{
        background-color:#e4ca75;
        border:none;
        font-size: 1rem;
        border-radius: 10px;
    }
</style>