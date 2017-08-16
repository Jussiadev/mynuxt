import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3f8630c0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _23227996 = () => import('../pages/promotions/index.vue' /* webpackChunkName: "pages/promotions" */).then(m => m.default || m)
const _2fd3c97e = () => import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */).then(m => m.default || m)
const _508c82d1 = () => import('../pages/brands/index.vue' /* webpackChunkName: "pages/brands" */).then(m => m.default || m)
const _1fce55fb = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _106fee8e = () => import('../pages/promo/_category/index.vue' /* webpackChunkName: "pages/promo-category" */).then(m => m.default || m)
const _0f6f8999 = () => import('../pages/brands/_brand.vue' /* webpackChunkName: "pages/brands-brand" */).then(m => m.default || m)
const _0c63e246 = () => import('../pages/promotions/_id.vue' /* webpackChunkName: "pages/promotions-id" */).then(m => m.default || m)
const _78a43c76 = () => import('../pages/promo/_category/_id.vue' /* webpackChunkName: "pages/promo-category-id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _3f8630c0,
			name: "index"
		},
		{
			path: "/promotions",
			component: _23227996,
			name: "promotions"
		},
		{
			path: "/posts",
			component: _2fd3c97e,
			name: "posts"
		},
		{
			path: "/brands",
			component: _508c82d1,
			name: "brands"
		},
		{
			path: "/about",
			component: _1fce55fb,
			name: "about"
		},
		{
			path: "/promo/:category?",
			component: _106fee8e,
			name: "promo-category"
		},
		{
			path: "/brands/:brand",
			component: _0f6f8999,
			name: "brands-brand"
		},
		{
			path: "/promotions/:id",
			component: _0c63e246,
			name: "promotions-id"
		},
		{
			path: "/promo/:category?/:id",
			component: _78a43c76,
			name: "promo-category-id"
		}
    ],
    fallback: false
  })
}
