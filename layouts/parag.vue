<template>
    <div>
        <h1>header</h1>
        <nuxt/>
        <h2>text in layout</h2>
        <par/>
        <h1>footer</h1>
    </div>
</template>

<script>
    import Par from '~/components/Par'
    export default {
        components: {
            Par
        }
    }
</script>