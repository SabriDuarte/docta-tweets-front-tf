<template>
    <div class="posts">
        <div class="titulo">
            <h3>{{autor}}</h3>
            <p>{{fecha}}</p>
        </div>
        <div class="posteo">
            <p>{{mensaje}}</p>
        </div>
        <div class="botones">
            <boton-like @evento-like="like">{{likes}}</boton-like>
            <boton-eliminar-post @evento-eliminar-post="eliminarPost"></boton-eliminar-post>
        </div>
    </div>
</template>

<script>

import BotonLike from './BotonLike';
import BotonEliminarPost from './BotonEliminarPost'

export default {
    name:'Post',
    components:{
        BotonLike,
        BotonEliminarPost
    },
    data(){
        return{
            post:[],
        }
    },
    props:{
        autor: String,
        fecha: String,
        mensaje: String,
        likes: Number
    },
    methods: {
        like(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}/like`,
            {
                method: 'POST'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    eliminarPost(){
        fetch(`https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}`,
        {
            method: 'DELETE',
            body: {
                "autor": "USERNAME"
        }
        })
        .then(res => {
            return res.json()
            })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }


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
