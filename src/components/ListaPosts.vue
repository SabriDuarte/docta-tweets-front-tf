<template>
    <div >
        <post v-for="(post,idx) in posts" :key="idx"
        :autor="post.autor.username" :fecha="post.fecha"
        :mensaje="post.mensaje" :likes="post.likes.length"
        :idPost="post._id"
        @eventLike='eventPosts' @eventDelete='eventPosts'>

        </post>

    </div>
</template>

<script>

import Post from '@/components/Post';

export default {
    name:'ListaPosts',
    components:{
        Post
    },
    props:{
        URL: String
    },

    methods:{
        eventPosts(){
            fetch(this.URL)
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
        }
    }


}
</script>