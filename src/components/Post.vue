<template>
    <div class="posts">
        <router-link :to="{name: 'post', params: {postID: idPost}}"></router-link>
        <div class="titulo">
            <h3>{{this.autor}}</h3>
            <p>{{this.fecha}}</p>
        </div>
        <div class="posteo">
            <p>{{this.mensaje}}</p>
        </div>
        <div class="botones">
            <boton-like @evento-like="like" :idPostUsuario="idPost" @click="like"><span> {{ `${likes} likes`}}</span></boton-like>
            <boton-eliminar-post @evento-eliminar='eliminarPost' :idPostUsuario="idPost" v-if="username == autor" />
        </div>
    </div>
</template>

<script>

import BotonLike from '@/components/BotonLike';
import BotonEliminarPost from '@/components/BotonEliminarPost'


export default {
    name:'Post',
    components:{
        BotonLike,
        BotonEliminarPost
    },
    props:{
        autor: String,
        fecha: String,
        mensaje: String,
        likes: Number,
        idPost: String,
    },
    data(){
        return{
            post:{},
            username: sessionStorage.getItem('username'),
        }
    },
    methods: {
        like(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}/like`,
            {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'POST'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.$emit('eventLike')
            })
            .catch(err => {
                console.log(err)
            })
        },

        eliminarPost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        autor: sessionStorage.getItem('username')
                    })
                })
                .then(res => {
                    return res.json()
                    })
                .then(data => {
                    console.log(data)
                    this.$emit('eventDelete')
                })
                .catch(err => {
                    console.log(err)
                })
            }
    },
}
</script>

<style>
    .posts{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        width:600px;
        margin: 15px auto;
        min-height: 10vh;
        border: 1px solid #6d6c6c;
        border-radius: 15px;
        background-color: rgb(42, 59, 75) ;
    }
    .titulo{
        display: flex;
        flex-basis: 100%;
        align-items: baseline;
        margin: 5px;
        color: white;
    }
    .titulo h3, .titulo p{
        width: 49%;
    }
    h3{
        margin: 0;
        padding-left: 30px;
    }
    .posteo{
        display: flex;
        flex-basis: 100%;
        margin: 0px 30px;
    }
    .botones{
        display: flex;
    }

</style>
