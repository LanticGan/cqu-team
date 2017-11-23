<template>
	<div class="competition-list">
		<router-link class="competition-item" v-for="item of competitions" :to="item.url" :key="item.id">
			<div class="cl-item-block">
				<div class="cl-thumb">
					<img :src="item.thumb" alt="avatar">
				</div>
				<div class="competition-info">
					<p class="cl-title">{{item.title}}</p>
					<p class="cl-des">{{item.prev}}</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'competitionList',
		props: {
			competitions: {
				default: [],
			},
			filter2: {
				type: String,
				default: '',
			},
		},
		data () {
			return {
				items: [
					{
						id:1,
						username: '甘宇廷',
						thumb: 'src/assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊，求编程大佬一枚三缺一，啊啊啊，求编程大佬一枚三缺一，啊啊啊',
						url: {
							name: 'competition',
							params: {
								competitionId: 1,
								userName: '甘宇廷',
							}
						},
					},
					{
						id:2,
						username: '甘宇廷',
						avatar: 'src/assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'competition',
							params: {
								competitionId: 2,
								userName: '甘宇廷',
							}
						},
					},
					{
						id:3,
						username: '甘宇廷',
						avatar: 'src/assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'competition',
							params: {
								competitionId: 3,
								userName: '甘宇廷',
							}
						},
					},
					{
						id:4,
						username: '甘宇廷',
						avatar: 'src/assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'competition',
							params: {
								competitionId: 4,
								userName: '甘宇廷',
							}
						},
					},

				]
			}
		}
	}
</script>

<style lang="scss">
	.competition-list {
		margin-bottom: 2em;
	}
	.competition-item {
		padding: 0.5em;
		border-bottom: 1px solid #e8e8e8;
		display: block;
		text-decoration: none;
		.cl-item-block {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: #000;
			height:5.9em;
			.cl-thumb {
				width: 60px;
				height: 60px;
				margin:0 10px;
				img {
					width: 100%;
				}
			}
			.competition-info {
				height: 5em;
				width: 75%;
				p {
					overflow: hidden;
					text-overflow: ellipsis;
					margin: 12px;
				}
				.cl-title {
					height: 1em;
					font-size:1.2em;
					font-weight: 400;
					margin-bottom:0;
				}
				.cl-des {
					margin-top:5px;
					height: 2em;
					font-size:1em;
					color: #777;
				}
			}
		}
	}
</style>