<template>
    <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
    export default {
        data () {
            return { name: 'World' }
        },

        head: {
            title: "Main page"
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>