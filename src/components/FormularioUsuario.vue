<template>
    <div class="formulario">
        <h2>Registrate</h2>
        <form @submit.prevent="formRegistrar" class="form">
            <input type="text" placeholder="Nombre Completo" v-model="nombre">
            <input type="text" placeholder="Usuario" v-model="username">
            <input type="password" placeholder="Contraseña" v-model="password">
            <input class="boton" type="submit" value="Registrarse">
        </form>
    </div>
</template>

<script>
export default {
    name:'FormularioUsuario',
    data(){
        return{
            registrarURL:'https://node-api-doctadevs.vercel.app/users',
            nombre:'',
            username:'',
            password:''
        }
    },
    methods:{
        formRegistrar(){
            fetch(this.registrarURL,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:this.nombre,
                    username:this.username,
                    password:this.password
                })
            })
            .then(res =>{
                return res.json()
            })
            .then(data =>{
                console.log(data)
            })
            .catch(err =>{
                console.log(err)
            })
            this.nombre='';
            this.username='';
            this.password = '';
        }
    }

}
</script>