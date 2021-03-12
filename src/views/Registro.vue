<template>
    <div>
        <formulario-usuario :userURL='userURL'></formulario-usuario>
    </div>
</template>

<script>

import FormularioUsuario from '../components/FormularioUsuario'

export default {
    name:'Registro',
    components:{
        FormularioUsuario
    },
    data(){
        return{
            userURL:'https://node-api-doctadevs.vercel.app/users'
        }
    }
}
</script>