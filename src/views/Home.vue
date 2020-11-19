<template>
    <div>
        <formulario-publicacion :URL='URL'></formulario-publicacion>
        <lista-posts :URL='URL'></lista-posts>
    </div>
</template>

<script>

import ListaPosts from '@/components/ListaPosts';
import FormularioPublicacion from '@/components/FormularioPublicacion'
export default {
    name:'Home',
    components:{
        ListaPosts,
        FormularioPublicacion
    },
    data(){
        return{
            URL:'https://node-api-doctadevs.vercel.app/posts'
        }
    },
}
</script>