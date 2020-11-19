<template>
    <div class="headerSab">
        <h1>Docta Tweets</h1>
        <menu-sab/>
        <div class="cerrarS">
            <boton-cerrar-sesion></boton-cerrar-sesion>
        </div>
    </div>
</template>

<script>

import MenuSab from './MenuSab';
import BotonCerrarSesion from './BotonCerrarSesion'

export default {
    name: 'HeaderSab',
    components: {
        MenuSab,
        BotonCerrarSesion
    },
}
</script>

<style scoped>
.headerSab{
    padding: 20px 0;
}
h1{
    text-align: center;
    color: #e4ca75;
    font-size: 4em;
}


</style>