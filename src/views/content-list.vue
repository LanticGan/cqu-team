<template>
	<div class="content-list">
		<router-link class="content-item" v-for="item of items" :to="item.url" :key="item.id">
			<div class="c-item-block">
				<div class="c-user-info">
					<div class="c-avater">
						<img :src="item.avatar" alt="avatar">
					</div>
					<span>{{item.username}}</span>
				</div>
				<div class="competition-info">
					<p class="c-title">{{item.title}}</p>
					<p class="c-des">{{item.description}}</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'contentList',
		props: {
			filter1: {
				type: String,
				default: '',
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
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 1,
								userName: '甘宇廷',
							}
						},
					},
					{
						id:2,
						username: '甘宇廷',
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 2,
								userName: '杨华岚',
							}
						},
					},
					{
						id:3,
						username: '甘宇廷',
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 3,
								userName: '甘宇廷',
								description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
							}
						},
					},
					{
						id:4,
						username: '甘宇廷',
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 4,
								userName: '甘宇廷',
							}
						},
					},
					{
						id:5,
						username: '甘宇廷',
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 5,
							}
						},
					},
					{
						id:6,
						username: '甘宇廷',
						avatar: '../assets/img/test-avatar.png',
						title: '计算机设计大赛',
						description: '三缺一，求编程大佬一枚三缺一，啊啊啊啊啊啊编程大佬一编程大佬一枚枚求编程大佬一枚啊啊啊啊啊',
						url: {
							name: 'content',
							params: {
								contentId: 6,
							}
						},
					},

				]
			}
		}
	}
</script>

<style lang="scss">
	.content-list {
		margin-bottom: 2em;
	}
	.content-item {
		padding: 0.5em;
		border-bottom: 1px solid #e8e8e8;
		display: block;
		text-decoration: none;
		.c-item-block {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: #000;
			height:5.9em;
			.c-user-info {
				overflow: hidden;
				width: 25%;
				text-align: center;
			}
			.competition-info {
				height: 5em;
				width:75%;
				p {
					white-space:nowrap; 
					overflow: hidden;
					text-overflow: ellipsis;
					margin: 12px;
				}
				.c-title {
					height: 1.2em;
					font-size:1.2em;
					font-weight: 400;
				}
				.c-des {
					height: 2.2em;
					font-size:1em;
					color: #777;
				}
			}
			.c-avater {
				width: 36px;
				height: 36px;
				margin: 0 auto 0.6em auto;
				img {
					width: 100%;
					border-radius: 50%;
				}
			}
		}
	}
</style>