<template>
    <div>
        <h1>Home page</h1>
        <nuxt-link to="/about">About</nuxt-link>
    </div>
</template>


<script>
    //import Par from '~/components/Par'
    export default {

        head: {
            title: "Main page"
        },
        layout: 'parag',
//        components: {
//            Par
//        }
        asyncData () {
            return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({})
                }, 1000)
            })
        }
    }
</script>