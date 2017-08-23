<template>
    <div id="list_tags">
        <ul v-for="tag in tags">
            <li><nuxt-link :to="'/search?str=' + tag.title">{{tag.title}}</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tags: [
                    {
                        "id": 1,
                        "title": "Тег1"
                    },
                    {
                        "id": 2,
                        "title": "Тег2"
                    },
                    {
                        "id": 3,
                        "title": "Тег3"
                    }
                ]
            }
        }
    }
</script>