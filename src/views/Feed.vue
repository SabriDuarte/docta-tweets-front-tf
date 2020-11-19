<template>
    <div class='feed'>
        <formulario-publicacion></formulario-publicacion>
        <lista-posts class='posteos' :URL='URL'></lista-posts>
    </div>
</template>

<script>

import FormularioPublicacion from '@/components/FormularioPublicacion';
import ListaPosts from '@/components/ListaPosts';
export default {
    name:'Feed',
    components:{
        FormularioPublicacion,
        ListaPosts
    },
    data(){
        return{
            URL:`https://node-api-doctadevs.vercel.app/users/${this.$route.params.username}/posts`
        }
    }
}


</script>
<style scoped>
    .feed{
        width: 1120px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
        border: none;
    }
    .posteos{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        width:600px;
        margin: 15px auto;
        min-height: 10vh;
        border: 1px solid #6d6c6c;
        border-radius: 15px;
        background-color: rgb(42, 59, 75) ;
    }
</style>