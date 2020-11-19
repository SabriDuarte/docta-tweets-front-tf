<template>
    <div>
        <button @click.prevent="eliminarCuenta">Eliminar Cuenta</button>
    </div>
</template>

<script>
export default {
    name:'BotonEliminarCuenta',
    methods:{
        eliminarCuenta(){
            this.$emit('eliminar-cuenta')
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