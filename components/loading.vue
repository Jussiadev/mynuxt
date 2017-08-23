<template lang="html">
  <div class="loading-page" v-if="loading">
    <img src="~assets/ajax-loader-2.gif">
  </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start () {
                this.loading = true
            },
            finish () {
                this.loading = false
            }
        }
    }
</script>

<style scoped>
    .loading-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 500px;
    }
</style>