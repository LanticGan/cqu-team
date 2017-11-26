<template>
	<div>
		<my-header headerName="组队信息"></my-header>
		<search-bar @searchActive="changeName"></search-bar>
		<tabBar @filterActive="changeFilter" @typeActive="changeType"></tabBar>
		<content-list :items="groupsList"></content-list>
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
				groupsList: [],
				// contents filter params
				wd: '',
				sort: 'late',
				type: '',
				page: 0,

				//scroll property
				scrollTop: -1,
				bodyTop: -1,
				showLoadMore: false,
				noMoredata: false,
			}
		},

		created () {
			this.fetchData()
		},

		methods: {
			fetchData () {
				let that = this;
				let params = {
					wd: this.wd,
					sort: this.sort,
					type: this.type,
					page: this.page,
				};

				// 如果page为0则重置列表，否则在列表末尾添加
				if (this.page == 0) {
					this.competitionsList = []
				}

				ajax.send('GET', '/api/groups', params, function (err, response){
					if (err) {
						return
					} else {
						let groups = JSON.parse(response).data;
						if (groups) {
							groups.forEach(function (item) {
								item.url = {
									name: 'content',
	                                params: {
	                                	contentId: `${item.id}`
	                                }
								}
							})
						}
						that.updateData(groups)
					}
				})
			},

			updateData (data) {
				this.groupsList = this.groupsList.concat(data)
				console.log(this.groupsList)
			},

			changeName () {},

			changeFilter () {},

			changeType () {},

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