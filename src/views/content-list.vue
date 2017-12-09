<template>
	<div class="content-list">
		<router-link class="content-item" v-for="item of items" :to="item.url" :key="item.id">
			<div class="c-item-block">
				<div class="c-user-info">
					<div class="c-avater">
						<img :src="item.avatar" alt="avatar">
					</div>
					<span>{{item.name}}</span>
				</div>
				<div class="competition-info">
					<p class="c-title">{{item.title}}</p>
					<p class="c-des">{{item.intro}}</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'contentList',
		props: {
			items: {
				default: function () {
					return []
				}
			}
		},
		data () {
			return {
			}
		},

		methods: {
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