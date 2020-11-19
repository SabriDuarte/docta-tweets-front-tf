<template>
    <div class="perTitulo">
        <h1>Perfil <i class="fas fa-user-circle"></i></h1>
        <div>
            <p>{{`Nombre: ${nombre}`}}</p>
            <p>{{`Usuario: ${usuario}`}}</p>
            <p>{{`Rol: ${rol}`}}</p>
        </div>
        <boton-eliminar-cuenta @eliminar-cuenta='eliminarCuenta'></boton-eliminar-cuenta>
    </div>
</template>

<script>

import BotonEliminarCuenta from '../components/BotonEliminarCuenta.vue'

export default {
    name:'Perfil',
    components: {
        BotonEliminarCuenta
    },
    data() {
        return {
            nombre:'',
            usuario:'',
            rol:''
        }
    },
    created(){
        fetch (`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}`,{
            headers:{
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data =>{
            if(data.error){
                return console.log(data)
            }
            this.nombre = data.body.name
            this.usuario = data.body.username
            this.rol = data.body.role
        })
        .catch(err => console.log(err))
    },
    methods:{
        eliminarCuenta(){
            fetch(`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}`,{
                headers: {
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method:'DELETE',
                body:{
                    autor: sessionStorage.getItem('username')
                }
            })
            .then(res => {
                return res.json()
            })
            .then(data =>{
                console.log(data)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('username')
                this.$router.push({name: 'login'})
            })
            .catch(err => console.log(err))
        },
    },
}
</script>
<style scoped>
    h1{
        font-size: 3rem;
        color:#e4ca75;
    }
    i {
        font-size: 3rem;
        color:#e4ca75;
    }
    .perTitulo{
        display: flex;
        justify-content: center;
        flex-direction: column ;
        align-items: center;
    }
    p{
        font-size: 1.5rem ;
        color: white;
    }


</style>