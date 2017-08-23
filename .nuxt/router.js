import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2f64232f = () => import('../pages/index.vue' /* webpackChunkName: "pages/" */).then(m => m.default || m)
const _588f4a72 = () => import('../pages/index/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _b2677534 = () => import('../pages/promotions/index.vue' /* webpackChunkName: "pages/promotions" */).then(m => m.default || m)
const _5017e4a0 = () => import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */).then(m => m.default || m)
const _251cc582 = () => import('../pages/brands/index.vue' /* webpackChunkName: "pages/brands" */).then(m => m.default || m)
const _0fac486a = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _33d122fd = () => import('../pages/promo/_category/index.vue' /* webpackChunkName: "pages/promo-category" */).then(m => m.default || m)
const _6630c5f0 = () => import('../pages/brands/_brand.vue' /* webpackChunkName: "pages/brands-brand" */).then(m => m.default || m)
const _294f2d64 = () => import('../pages/promotions/_id.vue' /* webpackChunkName: "pages/promotions-id" */).then(m => m.default || m)
const _4255c0a5 = () => import('../pages/promo/_category/_id.vue' /* webpackChunkName: "pages/promo-category-id" */).then(m => m.default || m)



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
			component: _2f64232f,
			children: [
				{
					path: "",
					component: _588f4a72,
					name: "index"
				}
			]
		},
		{
			path: "/promotions",
			component: _b2677534,
			name: "promotions"
		},
		{
			path: "/posts",
			component: _5017e4a0,
			name: "posts"
		},
		{
			path: "/brands",
			component: _251cc582,
			name: "brands"
		},
		{
			path: "/about",
			component: _0fac486a,
			name: "about"
		},
		{
			path: "/promo/:category?",
			component: _33d122fd,
			name: "promo-category"
		},
		{
			path: "/brands/:brand",
			component: _6630c5f0,
			name: "brands-brand"
		},
		{
			path: "/promotions/:id",
			component: _294f2d64,
			name: "promotions-id"
		},
		{
			path: "/promo/:category?/:id",
			component: _4255c0a5,
			name: "promo-category-id"
		}
    ],
    fallback: false
  })
}
