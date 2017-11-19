<template>
	<div class="content-block">
		<div class="cb-title">
			{{title}}
		</div>

		<div class="cb-team-leader">
			<div class="cb-block-description">
				<img src="src/assets/img/team-leader.png" alt="">
				<span>组队发起人</span>
			</div>
			<div class="cb-introduce">
				<div class="m-item-block" style="padding: 0;border:0;">
					<div class="m-user-info">
						<div class="m-avater">
							<img src="src/assets/img/test-avatar.png" alt="avatar">
						</div>
					</div>
					<div class="m-resume">
						<p class="m-title" style="font-size:1em;">甘宇廷</p>
						<p class="m-des">66666666666666666666666666666666666</p>
					</div>
					<div class="right-arrow" style="width:20px;height:20px;">
						<img src="src/assets/img/right-arrow.png" alt="" style="width:100%;">	
					</div>
				</div>
			</div>
		</div>

		<div class="cb-requirements">
			<div class="cb-block-description">
				<img src="src/assets/img/introduction.png" alt="">
				<span>详情描述</span>
			</div>
			<div class="weui-article">
				<p>比赛类别:</p>
				<p>aaa</p>
				<p>比赛截止时间:</p>
				<p>bbb</p>
				<p>招募需求:</p>
				<p>ccc</p>
			</div>
		</div>

		<div class="cb-teammates">
			<div class="cb-block-description">
				<img src="src/assets/img/teammates.png" alt="">
				<span>团队现有成员</span>
			</div>
			<div class="team-members" style="margin-left:15px;padding: 0.4em 0;">	
		        <div class="team-member-item" v-for="member in teammates">
		        		<img :src="member.userAvatar" alt="">
		        </div>
	        </div>
		</div>

		<div class="cb-numbers">
			<div class="cb-block-description">
				<img src="src/assets/img/communication.png" alt="">
				<span>联系方式</span>
			</div>
			<div class="weui-article">
				<p>微信: 123123</p>
			</div>
		</div>

	</div>



</template>

<script>
	export default {
		name: 'contentBlock',
		props: {
			contentId: {
				required: true,
			},
			title: {
				default: '计算机设计大赛',
			},
			competitionName: {
				default: 'xxx',
			},
			competitionTime: {
				default: 'xxx-xx-xx',
			},
			description: {
				default: 'AAA',
			}
		},
		data: function () {
			return {
				teammates: [
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
		components: {
		}
	}
</script>
<style lang="scss">
	
	$blockShadow: 0 4px 1px #eaeaea;
	.weui-article {
		color: #575757;
		margin: 0.6em 0 0 0;
		padding: 0.6em 15px !important;
	}

	.cb-title {
		text-align: center;
		padding: 1em 0;
		box-shadow: $blockShadow;
		font-size:1.3em;
	}

	.cb-team-leader {
		margin: 0.4em 0;
		box-shadow: $blockShadow;
	}

	.cb-introduce {
		padding: 0.4em 0;
	}

	.cb-requirements {
		box-shadow: $blockShadow;
	}

	.cb-teammates {
		box-shadow: $blockShadow;
	}

	.cb-block-description {
		padding: 0.4em 0.8em;
		border-bottom: solid 1px #efefef;
		img {
			vertical-align: middle;
			width: 24px;
			height: 24px;
			margin:0 4px;
		}

		span {
			vertical-align: middle;
		}
	}
</style>