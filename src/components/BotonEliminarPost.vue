<template>
    <div>
        <button @click="eliminarPost">Eliminar</button>
    </div>
</template>

<script>
export default {
    name:'BotonEliminarPost',
    methods:{
        eliminarPost(){
            this.$emit('evento-eliminar-post')
        }
    },
}
</script>