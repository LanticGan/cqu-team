<template>
	<div id="info">
		<search-bar></search-bar>
 	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	export default {
		name: 'info',
		data () {
			return {
			}
		},
		components: {
			searchBar,
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