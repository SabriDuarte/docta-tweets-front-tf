<template>
    <div>
        <lista-posts :URL='URL'></lista-posts>
    </div>
</template>

<script>

import ListaPosts from '@/components/ListaPosts'

export default {
    name: 'PostSingle',
    components:{
        ListaPosts
    },
    data(){
        return{
            URL:`https://node-api-doctadevs.vercel.app/posts/${this.$route.params.postID}`
        }
    }
}
</script>