<template>
    <div>
        <button @click="eliminarPost"><i class="fas fa-trash-alt"></i></button>
    </div>
</template>

<script>
export default {
    name:'BotonEliminarPost',
    methods:{
        eliminarPost(){
            this.$emit('evento-eliminar')
        }
    },
}
</script>
<style scoped>
    button{
        padding: 0px auto;
        margin: 5px auto;
        border:none;
        border-radius: 5px;
        background-color:  #e4ca75;
        font-size: 20px;
        cursor: pointer;
    }
    button:hover{
        color: rgb(43, 43, 199);
    }
</style>