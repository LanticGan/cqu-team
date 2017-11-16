<template>
	<div id="info">
		<search-bar></search-bar>
		<tab-bar></tab-bar>
		<competition-list></competition-list>
 	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	import tabBar from '../components/tabbar.vue'
	import competitionList from './competition-list.vue'
	export default {
		name: 'info',
		data () {
			return {
			}
		},
		components: {
			searchBar,
			tabBar,
			competitionList,
		}
	}
</script>

<style lang="scss">
	#filter-box {
		height: 2em;
		padding: 0.5em 2em;
		border-bottom: 1px solid #e8e8e8;
		display: flex;
		justify-content: center;
		select {
			margin: 2px 1em;
			width: 4em;
			color: #f8767e;
		}
	}
</style>