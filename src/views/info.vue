<template>
	<div id="info">
		<my-header headerName="比赛资讯"></my-header>
		<search-bar @searchActive="changeName"></search-bar>
		<tab-bar @filterActive="changeFilter" @typeActive="changeType"></tab-bar>
		<competition-list :competitions="competitionsList"></competition-list>
		<div class="weui-loadmore" v-show="showLoadMore">
            <i class="weui-loading"></i>
            <span class="weui-loadmore__tips">正在加载</span>
        </div>
        <div class="weui-loadmore weui-loadmore_line" v-show="noMoredata">
            <span class="weui-loadmore__tips">暂无数据</span>
        </div>
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

		mounted () {
			this.scroll()
		},

		watch: {
			'$route': 'fetchData',
		},

		methods: {
			changeFilter (condition) {
				if (condition == 'time') {
					this.th = 0
				}

				else if (condition == 'hot') {
					this.th = 1
				}
				// 每次重新点击都要初始化
				this.name = 0
				this.page = 1
				this.fetchData()
			},

			changeType (type) {
				// Satisfy the demand of API
				if (type == '全部') {
					this.type = 0
				} else {
					this.type = type
				}
				this.name = 0
				this.page = 1
				this.fetchData()
			},

			changeName (name) {
				this.type = 0
				this.th = 0
				this.page = 1
				this.name = name
				this.fetchData()
			},

			scroll () {
				let that = this;
				let scrollCarrier = document.getElementById('info');
				//初始化锁
				let unlock = true;
				scrollCarrier.addEventListener('touchmove', function () {
					// safari浏览器document.documentElement.scrollTop一直为0, 而其余大多浏览器document.body.scrollTop一直为0，这行代码解决了这个问题，太优雅了。
					let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
					// 判断是否拉到底部
					if (that.scrollTop != scrollTop) {
						that.scrollTop = scrollTop
					} else {
						if (that.scrollTop > 0 && unlock) {
							that.page += 1;
							that.fetchData()
							// 加锁，防止一直加载，影响体验。
							unlock = false;
							// 2s后解锁。
							setTimeout(() => { unlock = true }, 2000)
						}
					}
				})
			},

			fetchData (param) {
				this.showLoadMore = true
				this.noMoredata = false
				let that = this;
				let queryString = {
					th: this.th,
					name: this.name,
					type: this.type,
					page: this.page
				};

				if (this.page == 1) {
					this.competitionsList = []
				}

				ajax.send('GET', 'http://www.cquwinner.com/djangoapi/competitions', queryString, function (err, res){
					if (err) {
						return
					} else {
						// 判断是否还有数据
						if (res != 'null') {
							let resCompetitionsList = JSON.parse(res);
							resCompetitionsList.forEach(function (item) {
								if (item.id == -1) { return }
								item.url = {
									name: 'competition',
	                                params: {
	                                	competitionId: `${item.id}`
	                                }
								}
							})
							that.updateData(resCompetitionsList)
						} else {
							that.noMoredata = true
							that.showLoadMore = false
						}
					}
				})
			},

			updateData (data) {
				this.showLoadMore = false
				this.competitionsList = this.competitionsList.concat(data)
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

	.weui-loadmore {
		margin: -2em auto 4em auto !important;
	}
</style>