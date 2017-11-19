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

		<div class="m-btn">
			<div class="m-cancel-btn"　@click="cancel">
				取消
			</div>
			<div class="m-confirm-btn" @click="confirm">
				确认
			</div>
		</div>
	</div>
</template>

<script>
	import searchBar from '../components/search.vue'
	export default {
		data () {
			return {
				users: [
					{
						userId: 1,
						userName: '甘宇廷',
						userAvatar: 'src/assets/img/test-avatar.png',
						userDes: '66666666666666666666666666666666666',
						userSelected: false
					},
					{
						userId: 2,
						userName: '姚裕欣',
						userAvatar: 'src/assets/img/test-avatar.png',
						userDes: '66666666666666666666666666666666666',
						userSelected: false
					}
				]
			}
		},
		methods: {

			// Cancel select-teammates action
			cancel () {
				this.$emit("cancelSelect")
			},

			// Confirm select-teammates action
			confirm () {
				let selectedUserAvatarList = [];
				this.users.forEach((user) => {
					if (user.userSelected) {
						selectedUserAvatarList.push(user)
					}
				})
				this.$emit("confirmSelect", selectedUserAvatarList)
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

		.m-btn {
			margin-top: 20px;
			display: flex;
			justify-content: center;
			div {
				width: 4em;
				height: 1.4em;
				line-height: 1.4em;
				border-radius: 5px;
				text-align: center;
				padding: 4px 8px;
				margin:5px 10px;;
			}
			.m-cancel-btn {
				border: 1px solid rgba(53, 53, 53, 0.6);;
				color: rgba(53, 53, 53, 0.6);
			}
			.m-confirm-btn {
				color: #fff;
    			background-color: #fb7079;
    			border: 1px solid #fb7079;
			}
		}
</style>