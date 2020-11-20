<template>
    <div class="form-usuario">
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
<style scoped>
    .form-usuario{
        width: 500px;
        margin: 0 auto;
        display: flex;
        flex-flow:row wrap;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        min-width: 70vh;
        border: 1px solid #6d6c6c;
        border-radius: 15px;
        background-color: rgb(42, 59, 75) ;
    }
    .form input{
        width: 80%;
        height: 35px;
        margin: 8px 0;
        border-radius: 10px;
        border: 1px solid #6d6c6c;
        text-align: center;

    }
    button{
        width: 81%;
        font-size: 1.2rem;
        font-weight: 500;
        background-color:#e4ca75;
        border: none;
        border-radius: 10px;
        margin: 8px 0;
        padding: 1px 6px;
        height: 35px;
    }


</style>