<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import myHeader from './components/header.vue'
	import footerTab from './components/footer.vue'
	export default {
		name: 'app',
		data () {
			return {}
		},
		components: {
			myHeader,
			footerTab,
		}
	}
</script>

<style lang="scss">
	#app {
		height: 100%;
		width: 100%;
	}

	body {
		line-height: 1 !important;
	}
</style>