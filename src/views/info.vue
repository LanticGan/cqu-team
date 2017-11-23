<template>
	<div id="info" @touchstart.native="scroll">
		<my-header headerName="比赛资讯"></my-header>
		<search-bar></search-bar>
		<tab-bar @filterActive="changeFilter" @typeActive="changeType"></tab-bar>
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
				competitionsList: [],

				// competitions filter params
				th: 0,
				type: 0,
				name: 0,
				page: 1,

			}
		},

		created () {
			this.fetchData()
		},


		watch: {
			'$route': 'fetchData',
			'th': 'fetchData',
			'type': 'fetchData',
		},

		methods: {
			changeFilter (condition) {
				if (condition == 'time') {
					this.th = 0
				}

				else if (condition == 'hot') {
					this.th = 1
				}
			},

			changeType (type) {

				// Satisfy the demand of API
				if (type == '全部') {
					this.type = 0
				} else {
					this.type = type
				}
			},

			fetchData () {

				let that = this;
				let params = {
					th: this.th,
					type: this.type,
					page: this.page,
					name: this.name,
				};

				ajax.send('GET', '/djangoapi/competitions', params, function (err, res){
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
						that.updateData(resCompetitionsList)
					}
				})
			},

			updateData (data) {
				// 如果page为1则重置列表，否则在列表末尾添加
				if (this.page == 1) {
					this.competitionsList = []
				} 
				this.competitionsList = this.competitionsList.concat(data)
			},

			scroll (event) {
				let finger = event.targetTouches[0];
				let initY = finger.clientY;	
				console.log(initY)
			},

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