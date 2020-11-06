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