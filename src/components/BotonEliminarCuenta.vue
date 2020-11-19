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