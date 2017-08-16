<template>
    <div>
        <template v-for="post in posts">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </template>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        async asyncData ({ params }) {
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            console.log(data);
            return { posts: data }
        }
    }
</script>