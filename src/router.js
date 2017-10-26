import Vue from 'vue'
import Router from 'vue-router'
import info from './views/info.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/info',
			component: info
		}
	]
})