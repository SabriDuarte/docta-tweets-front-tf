<template>
    <lista-posts :fetchURL='fetchURL'></lista-posts>
</template>

<script>

import ListaPosts from '@/components/ListaPosts';

export default {
    name:'Feed',
    components:{ListaPosts},
    props:{
        APIurl:{
            type: String,
            default: () => ""
        }
    },
    data(){
        return{
            fetchURL: `${this.APIurl}/users/${this.$route.params.username}/posts`,
        }
    }
}
</script>