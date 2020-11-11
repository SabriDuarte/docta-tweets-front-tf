<template>
    <div>
        <button @click="like">Like</button>
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
<style>
    button{
        font-size: 15px;
        background-color: #e4ca75;
        border: none;
        border-radius: 5px;
        margin: 5px 3px 5px;
        cursor: pointer;
    }
</style>