<template>
	<div class="team-members-search">
		<searchBar></searchBar>
		<div class="m-item-block" v-for="user in users">
			<div class="m-user-info">
				<div class="m-avater">
					<img :src="user.userAvatar" alt="avatar">
				</div>
			</div>
			<div class="m-resume">
				<p class="m-title">{{user.userName}}</p>
				<p class="m-des">{{user.userDes}}</p>
			</div>
			<div class="checkbox" :class="{'m-select' : user.userSelected}" @click="user.userSelected = !user.userSelected" >
        		<input type="checkbox" name="checkbox1">
        	</div>
		</div>
		<div @click="cancel">取消</div>
	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	export default {
		data () {
			return {
				users: [
					{
						userName: '甘宇廷',
						userAvatar: '/src/assets/img/test-avatar.png',
						userDes: '66666666666666666666666666666666666',
						userSelected: false
					},
					{
						userName: '姚裕欣',
						userAvatar: '/src/assets/img/test-avatar.png',
						userDes: '66666666666666666666666666666666666',
						userSelected: false
					}
				]
			}
		},
		methods: {
			cancel () {
				this.$emit("cancelSelect")
			},
			consoleTest () {
				console.log(this.user1)
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
			padding: 10px;
			border-bottom: 1px solid #e1e1e1;
			.m-user-info {
				overflow: hidden;
				width: 20%;
				text-align: center;
			}
			.m-resume {
				height: 5em;
				width:60%;
				margin-right:2em;
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

		.checkbox {
			width:28px;
			height: 28px;
			background: #fff;
			border-radius: 50%;
			border: 1px solid #C9C9C9;
			box-sizing: border-box;
			input {
				visibility: hidden;
			}
		}
	
		.m-select {
			background-image: url(../assets/img/selected.png);
			background-size: 28px;
			background-position: 0;
			border: 1px solid #fb4651;
		}

</style>