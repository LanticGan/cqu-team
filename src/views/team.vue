<template>
	<div id="team">
		<my-header headerName="组队信息"></my-header>
		<search-bar @searchActive="changeName"></search-bar>
		<tabBar @filterActive="changeFilter" @typeActive="changeType"></tabBar>
		<content-list :items="groupsList"></content-list>
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

		mounted () {
			this.scroll()
		},

		watch: {
			'$route': 'fetchData',
		},

		methods: {
			fetchData () {
				this.showLoadMore = true
				this.noMoredata = false
				let that = this;
				let params = {
					wd: this.wd,
					sort: this.sort,
					type: this.type,
					page: this.page,
				};

				// 如果page为0则重置列表，否则在列表末尾添加
				if (this.page == 0) {
					this.groupsList = []
				}

				ajax.send('GET', '/api/groups', params, function (err, response){
					if (err) {
						return
					} else {
						let groups = JSON.parse(response).data;
						if (groups.length) {
							groups.forEach(function (item) {
								item.url = {
									name: 'content',
	                                params: {
	                                	contentId: `${item.id}`
	                                }
								}
							})
							that.updateData(groups)
						} else {
							that.noMoredata = true
							that.showLoadMore = false
						}
						
					}
				})
			},

			updateData (data) {
				this.showLoadMore = false
				this.groupsList = this.groupsList.concat(data)
			},

			changeName (name) {
				this.page = 0
				this.sort = 'late'
				this.type = ''
				this.wd = name
				this.fetchData()
			},

			changeFilter (condition) {
				if (condition == 'time') {
					this.sort = 'late'
				}

				else if (condition == 'hot') {
					this.sort = 'hot'
				}
				this.wd = ''
				this.page = 0
				this.fetchData()
			},

			changeType (type) {
				if (type == '全部') {
					this.type = ''
				} else {
					this.type = type
				}
				this.wd = ''
				this.page = 0
				this.fetchData()
			},

			scroll () {
				let that = this;
				let scrollCarrier = document.getElementById('team');
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