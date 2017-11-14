<template>
	<div id="tabbar">
		<div id="time-sort" :class="{'tab-active': timeActive}" @click="timsIsActive">时间优先</div>
		<div id="hot-sort" :class="{'tab-active': hotActive}" @click="hotIsActive">热度优先</div>
		<div id="competition-type">比赛类型
			<span class="down-arrow">
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				timeActive: true,
				hotActive: false,
			}
		},
		methods: {
			timsIsActive () {
				// send message to team.vue
				this.timeActive = true
				this.hotActive = false
			},
			hotIsActive () {
				// send message to team.vue
				this.hotActive = true
				this.timeActive = false
			},

		}
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
		color: #fb7154 !important;
	}

	#competition-type {
		.down-arrow {
			display: inline-block;
			width:24px;
			height:26px;
			background-image: url(../assets/img/down-arrow.png);
			background-size: 24px;
			background-repeat: no-repeat;
			vertical-align:middle;
	
		}
	}
</style>