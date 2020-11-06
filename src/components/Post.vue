<template>
    <div>
        <div>
            <h3>{{autor}}</h3>
            <p>{{fecha}}</p>
            <p>{{mensaje}}</p>
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
            post:{},
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