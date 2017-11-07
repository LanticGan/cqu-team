<template>
	<div id="info">
		<!-- <div id="filter-box">
			<select v-model="filter.filter1" name="" id="">
				<option value="test1">test1</option>
				<option value="test2">test2</option>
			</select>
			<select v-model="filter.filter2" name="" id="">
				<option value="test">test</option>
			</select>
		</div> -->
		<search-bar></search-bar>
	 	<content-list v-bind="filter"></content-list>
 	</div>
</template>

<script>
	import contentList from './content-list.vue'
	import searchBar from '../components/search.vue'
	export default {
		name: 'info',
		data () {
			return {
				filter: {
					filter1: "",
					filter2: "",
				}
			}
		},
		components: {
			searchBar,
			contentList,
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