<template>
    <div>
        <formulario-usuario :usuarioURL='usuarioURL'></formulario-usuario>
    </div>
</template>

<script>

import FormularioUsuario from '@/components/FormularioUsuario'

export default {
    name:'Registro',
    components:{
        FormularioUsuario
    },
    data(){
        return{
            usuarioURL:'https://node-api-doctadevs.vercel.app/users'
        }
    }
}
</script>