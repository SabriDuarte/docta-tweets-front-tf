<template>
    <div class="formulario">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent='formLogin' class="form">
            <input type="text" placeholder="Usuario" v-model="username">
            <input type="password" placeholder="Contraseña" v-model="password">
            <input class="boton" type="submit" value="Iniciar Sesión">
        </form>

    </div>
</template>

<script>
export default {
    name:'FormularioLogin',
    props:{
        loginURL: String
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        formLogin(){
            fetch(this.loginURL,{
                method:'POST',
                headers:{'Content-type': "application/json"},
                body:JSON.stringify({
                    username :this.username,
                    password :this.password,
                }),
            })
            .then(res => {
                return res.json()
                })
            .then(data=>{
                if(data.error) return console.log(data);
                let token = data.body.token;
                sessionStorage.setItem('token',token);
                sessionStorage.setItem('username',this.username)
                this.username='';
                this.password='';

                this.$router.push({name:"home"});

            })
            .catch(err => {
                console.log(err)
            })
        },
    },
}
</script>
<style>
    .formulario{
        width: 500px;
        margin: 0 auto;
        display: flex;
        flex-flow:row wrap;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        min-width: 70vh;
        border: 1px solid #6d6c6c;
        border-radius: 15px;
        background-color: rgb(42, 59, 75) ;
    }
    h2{
        color:#e4ca75;
    }
    .form{
        display: flex;
        margin: 10px auto;
        flex-basis: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 30vh;
        border-radius: 15px;
    }
    .form input{
        width: 80%;
        height: 35px;
        margin: 8px 0;
        border-radius: 10px;
        border: 1px solid #6d6c6c;
        text-align: center;

    }
    input.boton{
        width: 81%;
        font-size: 1.2rem;
        font-weight: 500;
        background-color:#e4ca75;
        height: 35px;
    }
</style>
