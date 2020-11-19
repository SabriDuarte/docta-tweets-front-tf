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