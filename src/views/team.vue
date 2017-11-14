<template>
	<div>
		<search-bar></search-bar>
		<tabBar></tabBar>
		<content-list v-bind="filter"></content-list>
	</div>
</template>

<script>
	import contentList from './content-list.vue'
	import searchBar from '../components/search.vue'
	import tabBar from '../components/tabbar.vue'
	export default {
		name: 'team',
		data () {
			return {
				filter: {
					filter1: '',
					filter2: '',
				}
			}
		},
		components: {
			searchBar,
			contentList,
			tabBar,
		}
	}
</script>

<style lang="scss">

</style>