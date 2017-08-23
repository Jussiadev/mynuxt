<template>
    <div>
        <h1>About us</h1>
        <nuxt-link to="/">Go to /</nuxt-link>
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

<style>
    .red {
        color: red;
    }
</style>