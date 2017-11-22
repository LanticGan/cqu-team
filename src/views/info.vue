<template>
	<div id="info">
		<my-header headerName="比赛资讯"></my-header>
		<search-bar></search-bar>
		<tab-bar></tab-bar>
		<competition-list :competitions="competitionsList"></competition-list>
		<footer-tab></footer-tab>
 	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	import tabBar from '../components/tabbar.vue'
	import competitionList from './competition-list.vue'
	import footerTab from '../components/footer.vue'
	import myHeader from '../components/header.vue'
	export default {
		name: 'info',
		data () {
			return {
				competitionsList: []
			}
		},

		created () {
			this.fetchData()
		},

		watch: {
			'$route': 'fetchData',
		},

		methods: {
			fetchData () {
				let data = {
					th:0,
					page:1,
					type:0,
					name:0,
				};
				// Save Vue instance
				let that = this;

				ajax.send('GET', '/djangoapi/competitions', data, function (err, res){
					if (err) {
						return
					} else {
						let resCompetitionsList = JSON.parse(res);
						resCompetitionsList.forEach(function (item) {
							item.url = {
								name: 'competition',
                                params: {
                                	competitionId: `${item.id}`
                                }
							}
						})
						that.competitionsList = resCompetitionsList
					}
				})
			}
		},

		components: {
			myHeader,
			searchBar,
			tabBar,
			competitionList,
			footerTab,
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