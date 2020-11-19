<template>
    <div >
        <post v-for="(post,idx) in posts" :key="idx"
        :autor="post.autor.username" :fecha="post.fecha"
        :mensaje="post.mensaje" :likes="post.likes.length"
        :idPost="post._id" :postURL="postURL"
        @eventLike='eventPosts' @eventDelete='eventPosts'>

        </post>

    </div>
</template>

<script>

import Post from '@/components/Post';

export default {
    name:'ListaPosts',
    props:{
        URL: String
    },
    components:{
        Post
    },

    methods:{
        eventPosts(){
            fetch(this.postURL)
            .then(res => res.json())
            .then(data => {
                this.posts = data.body;
            })
            .catch(error => console.log('error', error));
        }
    },
    created(){
        this.eventPosts()
    },
    data() {
        return {
            posts: [],
            postURL: "https://node-api-doctadevs.vercel.app/posts"
        }
    }


}
</script>