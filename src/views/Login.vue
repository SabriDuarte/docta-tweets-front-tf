<template>
    <div>
        <formulario-login :loginURL='loginURL'></formulario-login>
    </div>
</template>

<script>

import FormularioLogin from '@/components/FormularioLogin'

export default {
    name:'Login',
    components:{
        FormularioLogin
    },
    data(){
        return{
            loginURL:'https://node-api-doctadevs.vercel.app/login'
        }
    }
}
</script>

