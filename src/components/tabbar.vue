<template>
<div>
	<div id="tabbar">
		<div id="time-sort" :class="{'tab-active': timeActive}" @click="timsIsActive">时间优先</div>
		<div id="hot-sort" :class="{'tab-active': hotActive}" @click="hotIsActive">热度优先</div>
		<div id="competition-type" @click="typeIsActive">比赛类型
			<span class="default-arrow" :class="{'active-arrow' : typeActive}"></span>
		</div>
	</div>
	<transition name="menu">
		<div class="menu" id="type-menu" v-show="typeActive">
			<div class="row" v-for="(row, rowIndex) in rows">
				<div class="type-item" :class="{'item-active': (`${rowIndex}${itemIndex}` == activeItem)}" v-for="(item, itemIndex) in row.row" :key="item.id" @click="clickItem(`${rowIndex}${itemIndex}`,item.id)">
					{{item.name}}
				</div>
			</div>
		</div>
	</transition>
</div>
</template>

<script>
	export default {
		data () {
			return {
				timeActive: true,
				hotActive: false,
				typeActive: false,
				activeItem: "00",
				rows: [
					{
						row: [
							{
								id:"qb",
								name: '全部',
							},
							{
								id:"cy",
								name: '创业大赛',
							},
							{
								id:"gg",
								name: '广告创意',
							},
							{
								id:"xk",
								name: '学科学术',
							}
						]
					},
					{
						row: [
							{
								id:"xxcg",
								name: '选秀唱歌',
							},
							{
								id:"wxyj",
								name: '文学演讲',
							},
							{
								id:"yxch",
								name: '营销策划',
							},
							{
								id:"sjbs",
								name: '设计比赛',
							}
						],
					},
				]
				
			}
		},
		methods: {
			timsIsActive () {
				// send message to team.vue
				this.$emit('filterActive', 'hhh')
				this.timeActive = true
				this.hotActive = false
			},
			hotIsActive () {
				// send message to team.vue
				this.hotActive = true
				this.timeActive = false
			},
			clickItem (index, content) {
				// send message to team.vue
				this.activeItem = index
			},
			typeIsActive () {
				this.typeActive = !this.typeActive
			}
		},
	}
</script>

<style lang="scss">
	#tabbar {
		height: 3em;
		display: flex;
		box-shadow:0 1px 1px #e1e1e1;
		& div {
			flex: 1;
			text-align: center;
			line-height:3em;
			color: #7e7e7e;
			margin: 0 10px;
		}
	}

	.tab-active {
		color: #fb4651 !important;
	}

	#competition-type {
		.default-arrow {
			display: inline-block;
			width:24px;
			height:26px;
			background-image: url(../assets/img/down-arrow.png);
			background-size: 24px;
			background-repeat: no-repeat;
			vertical-align:middle;
	
		}

		.active-arrow {
			background-image: url(../assets/img/up-arrow.png) !important;
		}
	}


	$type-item-height: 1.5em;
	.hidden {
		display: none;
	}
	.menu {
		position: relative;
		.row {
			display: flex;
			.type-item {
				flex: 1;
				text-align: center;
				margin: 10px 6px;
				height: $type-item-height;
				line-height: $type-item-height;
				border:1px solid #E5E5E5;
				border-radius:5px;
				padding:5px;
			}
		}
		.item-active {
			border: 1px solid #fb4651 !important;
			color: #fb4651 !important;
		}
	}

	.menu-enter-active {
		transition: all .6s;
	}

	.menu-enter {
		opacity: 0;

	}
</style>