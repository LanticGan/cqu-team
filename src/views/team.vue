<template>
	<div>
		<my-header headerName="组队信息"></my-header>
		<search-bar @searchActive="getFilter"></search-bar>
		<tabBar @filterActive="getFilter"></tabBar>
		<content-list v-bind="filter"></content-list>
		<footer-tab></footer-tab>
	</div>
</template>

<script>
	import contentList from './content-list.vue'
	import searchBar from '../components/search.vue'
	import tabBar from '../components/tabbar.vue'
	import footerTab from '../components/footer.vue'
	import myHeader from '../components/header.vue'
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
		methods: {
			getFilter (val) {
				console.log(val)
			}
		},
		components: {
			searchBar,
			contentList,
			tabBar,
			footerTab,
			myHeader,
		},
	}
</script>

<style lang="scss">

</style>