import Vue from 'vue'
import Router from 'vue-router'
import info from './views/info.vue'
import contentBlock from './views/content-block.vue'
import team from './components/team.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/info',
		},
		{
			path: '/info',
			component: info
		},
		{
			name: 'content',
			path: '/content/:contentId',
			component: contentBlock,
			props: true,
		},
		{
			path: '/team',
			component: team,
		}
	]
})