<template>
    <div>
        <p>id {{ post.body }}</p>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        async asyncData ({ params }) {
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            return { post: data }
        }
    }
</script>