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