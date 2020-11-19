<template>
    <div class="form-publicacion">
        <form class="formulario" @submit.prevent='enviarPost'>
            <h3>Agregar Tweet</h3>
                <textarea v-model="publicar" placeholder="¿Qué está pasando?"></textarea>
            <button>Twittear</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'FormularioPublicacion',
    data(){
        return{
            publicar:'',
        }
    },
    methods:{
        enviarPost(){
            fetch('https://node-api-doctadevs.vercel.app/posts',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    autor: sessionStorage.getItem('username'),
                    mensaje: this.publicar
                })
            })
            .then(res =>{
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {console.log(err)
            })
            this.publicar =''
        }
    }
}
</script>
<style scoped>
    h3{
        text-align: center;
        font-size: 1.5rem;
        color:#e4ca75;
        margin:3px auto;
    }
    .form-publicacion{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        width:600px;
        margin: 15px auto;
    }
    .formulario{
        width: 90%;
    }
    .formulario textarea{
        width: 95%;
        min-height: 10vh;
        background-color: rgb(21, 32, 43);
        border: 1px solid #6d6c6c;
        border-radius: 5px;
        color: white;

        font-size: 1.2rem;
    }
    button{
        background-color:#e4ca75;
        border:none;
        width: 20%;
        font-size: 1rem;
        border-radius: 10px;
    }

</style>