<template>
    <div>
        <template v-for="post in posts">
            <h1>promotions: {{ post.title }}</h1>
        </template>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        async asyncData ({ params }) {
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            return { posts: data }
        }
    }
</script>
