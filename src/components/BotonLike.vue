<template>
    <div>
        <button @click="like"><i class="far fa-heart"></i><slot></slot></button>
    </div>
</template>

<script>
export default {
    name:'BotonLike',
    methods:{
        like(){
            this.$emit('evento-like')
        }

    },
}
</script>
<style scoped>
    button{
        padding: 0px auto;
        margin: 5px 10px auto;
        font-size: 20px;
        background-color: #e4ca75;
        border:none;
        border-radius: 5px;
        cursor: pointer;
    }
        button:hover{
        color: red;
    }
</style>