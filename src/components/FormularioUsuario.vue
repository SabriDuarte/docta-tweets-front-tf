<template>
    <div class="formulario">
        <h2>Registrate</h2>
        <form @submit.prevent="formRegistrar" class="form">
            <input type="text" placeholder="Nombre Completo" v-model="nombre">
            <input type="text" placeholder="Usuario" v-model="username">
            <input type="password" placeholder="Contraseña" v-model="password">
            <button>Regístrate</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'FormularioUsuario',
    props:{
        userURL: String
    },
    data(){
        return{
            nombre:'',
            username:'',
            password:''
        }
    },
    methods:{
        formRegistrar(){
            fetch(this.userURL,{
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
                this.nombre='';
                this.username='';
                this.password = '';
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

}
</script>