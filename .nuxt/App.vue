<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('./layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

export default {
  head: {"meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"}],"css":["~/node_modules/hover.css/css/hover-min.css","~/node_modules/bulma/css/bulma.css","~/HTML_design/libs/fancybox/jquery.fancybox.css","~/HTML_design/libs/owl-carousel/assets/owl.carousel.css","~/HTML_design/style.css","~/assets/css/style.css"],"build":{"extractCSS":true},"link":[],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

