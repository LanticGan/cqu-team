import Vue from 'vue'
import Router from 'vue-router'
import info from './views/info.vue'
import contentBlock from './views/content-block.vue'
import team from './views/team.vue'
import person from './views/person.vue'
import post from './views/post.vue'
import competition from './views/competition.vue'
import user from './views/user.vue'
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
		},
		{
			path: '/person',
			component: person,
		},
		{
			path: '/post',
			component: post
		},
		{
			name: 'competition',
			path: '/competition/:competitionId',
			component: competition,
			props: true,
		},
		{
			name: 'user',
			path: '/user/:userId',
			component: user,
			props: true,
		}

	]
})