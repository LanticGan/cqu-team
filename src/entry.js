import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

Vue.config.debug = true


new Vue({
	router,
	el: '#appendIndex',
	render: c => c(App)
})
