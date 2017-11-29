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
			<router-link :to = "'/user/' + founder.id">
				<div class="cb-introduce">
					<div class="m-item-block" style="padding: 0;border:0;">
						<div class="m-user-info">
							<div class="m-avater">
								<img :src="founder.avatar" alt="avatar">
							</div>
						</div>
						<div class="m-resume">
							<p class="m-title" style="font-size:1em;">{{ founderName }}</p>
							<p class="m-des">{{ founderResume }}</p>
						</div>
						<div class="right-arrow" style="width:20px;height:20px;">
							<img src="src/assets/img/right-arrow.png" alt="" style="width:100%;">	
						</div>
					</div>
				</div>
			</router-link>
		</div>

		<div class="cb-requirements">
			<div class="cb-block-description">
				<img src="src/assets/img/introduction.png" alt="">
				<span>比赛信息</span>
			</div>
			<div class="weui-article" style="color: #3c3c3c">
				<p>比赛名称:&ensp;{{compet.title}}</p>
				<p>比赛类别:&ensp;{{compet.type}}</p>
				<p>比赛截止时间:&ensp;{{compet.ddl}}</p>
				<p>比赛详情:</p>
				<p><a href="#">{{compet.url}}</a></p>
			</div>
		</div>

		<div class="cb-requirements">
			<div class="cb-block-description">
				<img src="src/assets/img/demand.png" alt="">
				<span>招募需求</span>
			</div>
			<div class="weui-article" style="color: #3c3c3c">
				<p>{{demand}}</p>
			</div>
		</div>

		<div class="cb-teammates">
			<div class="cb-block-description">
				<img src="src/assets/img/teammates.png" alt="">
				<span>团队现有成员</span>
			</div>
			<div class="team-members" style="margin-left:15px;padding: 0.4em 0;">
				<router-link v-for="member in members" :to="'/user/' + member.id" :key="member.id">
			       <div class="team-member-item">
			       		<img :src="member.avatar" alt="">
			       </div>
		       </router-link>
	        </div>
		</div>

		<div class="cb-numbers">
			<div class="cb-block-description">
				<img src="src/assets/img/communication.png" alt="">
				<span>联系方式</span>
			</div>
			<div class="weui-article" style="color: #3c3c3c">
				<p>手机号: &ensp; {{phoneNumber}}</p>
				<p>qq号: &ensp; {{qqNumber}}</p>
			</div>
		</div>

	</div>



</template>

<script>
	export default {

		name: 'contentBlock',

		mounted () {
			this.fetchData(this.$route.params.contentId)
		},

		data: function () {
			return {
				title: '',
				founder () {
					return {
						id: '',
						avatar: '',
					}
				},
				compet () {
					return {
						title: '',
						type: '',
						ddl: '',
						url:'',
					}
				},
				demand: '',
				members: [
				],
				contact: '',
				phoneNumber: '',
				qqNumber: '',
				founderName: '',
				founderResume: '',
			}
		},

		methods: {
			fetchData (competId) {
				let that = this;
				ajax.send('GET', `/api/groups/${competId}`, {}, function(err, res) {
					if (err) { return }
					console.log(res)
					let response = JSON.parse(res);
					if (response.status == 'ok') {
						let data = response.data;
						that.title = data.title
						that.demand = data.demand
						if (data.members.length) {
							that.members = data.members
						}
						//联系方式需特别处理
						[that.phoneNumber, that.qqNumber] = data.contact.split(',')
						// 竞赛信息
						that.compet.title = data.compet.title
						that.compet.type = data.compet.type
						that.compet.url = data.compet.url
						that.compet.ddl = data.compet.ddl

						// 发起人信息
						that.founder.id = data.founder.id
						that.founder.avatar = data.founder.avatar

						//符合Vue模板语法要求
						that.founderName = data.founder.name
						that.founderResume = data.founder.resume
					}

				})
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