import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/info',
			component:test
		}
	]
})