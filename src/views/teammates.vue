<template>
	<div class="team-members-search">
		<searchBar></searchBar>
		<div class="m-item-block">
			<div class="m-user-info">
				<div class="m-avater">
					<img src="/src/assets/img/test-avatar.png" alt="avatar">
				</div>
			</div>
			<div class="m-resume">
				<p class="m-title">甘宇廷</p>
				<p class="m-des">66666666666666666666666666666666666</p>
			</div>
		</div>
		<div @click="cancel">取消</div>
	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	export default {
		data () {
			return {}
		},
		methods: {
			cancel () {
				this.$emit("cancelSelect")
			}
		},
		components: {
			searchBar,
		}
	}
</script>

<style lang="scss">

		.team-members-search {
			background: #fff;
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom:0;
			z-index: 500;
		}

		.m-item-block {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: #000;
			height:5.9em;
			padding: 10px;
			border-bottom: 1px solid #efefef;
			.m-user-info {
				overflow: hidden;
				width: 20%;
				text-align: center;
			}
			.m-resume {
				height: 5em;
				width:60%;
				p {
					white-space:nowrap; 
					overflow: hidden;
					text-overflow: ellipsis;
					margin: 12px;
				}
				.m-title {
					font-size:1.2em;
					font-weight: 400;
				}
				.m-des {
					height: 2.2em;
					font-size:1em;
					color: #777;
				}
			}
			.m-avater {
				width: 48px;
				height: 48px;
				margin: 0 auto 0.6em auto;
				padding-top: 5px;
				img {
					width: 100%;
					border-radius: 50%;
				}
			}
		}
	
</style>