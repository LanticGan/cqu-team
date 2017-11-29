<template>
	<div id="post">
		<my-header headerName="需求发布"></my-header>
		<form action="" method="post" enctype="multipart/form-data" id="identify-form">
			<div class="weui-cell">
		            <div class="weui-cell__hd"><label class="weui-label">招募标题</label></div>
		            <div class="weui-cell__bd">
		                <input v-model="title" class="weui-input"  placeholder="一个好的标题才能吸引大佬哦" required="true">
		            </div>
		    </div>
			<div class="weui-cell">
	            <div class="weui-cell__hd"><label class="weui-label">比赛名称</label></div>
	            <div class="weui-cell__bd">
	                <input v-model="competitionName" class="weui-input"  placeholder="您要参加的比赛" required="true">
	            </div>
	        </div>
	        <div class="weui-cell" @click="typePicker" style="height:43.53px; box-sizing: border-box; line-height:23.525px;">
	            <div class="weui-cell__hd">
	            	<label class="weui-label">比赛类别</label>
	            </div>
	            <div class="weui-cell__bd">
	                {{type}}
	            </div>
	        </div>
	        <div class="weui-cell">
	                <div class="weui-cell__hd"><label for="" class="weui-label">截止日期</label></div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="date" v-model="deadline" required="true">
	                </div>
	        </div>
	        <div class="weui-cell">
	            <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
	            <div class="weui-cell__bd">
	                <input class="weui-input"  v-model="number" placeholder="选填">
	            </div>
	        </div>
	        <div class="weui-cell">
	            <div class="weui-cell__hd"><label class="weui-label">qq号</label></div>
	            <div class="weui-cell__bd">
	                <input class="weui-input"  v-model="qq" placeholder="选填">
	            </div>
	        </div>
	        <div class="weui-cell">
	            <div class="weui-cell__hd"><label class="weui-label">详情链接</label></div>
	            <div class="weui-cell__bd">
	                <input class="weui-input"  v-model="url" placeholder="帮助他人了解比赛详情">
	            </div>
	        </div>
	        <div class="weui-cell" @click="showSelect">
	            <div class="weui-cell__hd">
	            	<label class="weui-label">团队成员</label>
	            </div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type="text" placeholder="点击配置团队现有成员" disabled="disabled">
	             </div>
	        </div>
	        <div class="team-members" style="margin-left:15px;">	
		        <div class="team-member-item" v-for="member in teammates">
		        		<img :src="member.userAvatar" alt="">
		        </div>
	        </div>
	        <div class="weui-cell">
	            <div class="weui-cell__bd">
		            <textarea v-model="text" class="weui-textarea" :disabled="disabled" placeholder="请简单描述您的招募需求" rows="3"></textarea>
		            <div class="weui-textarea-counter"><span>{{text.length}}</span>/{{maxLength}}</div>
	            </div>
	        </div>
	        <div class="post-btn" @click="postData">
	        	<a href="javascript:;" class="weui-btn weui-btn_plain-default">发布</a>
	        </div>
		</form>
		<transition name="teammates">
			<teammates v-show="showTeammatesSelect" @cancelSelect="showTeammatesSelect = false" @confirmSelect="addTeammates"></teammates>
		</transition>
	</div>
</template>
1
<script>
	import searchBar from '../components/search.vue'
	import teammates from './teammates.vue'
	import myHeader from '../components/header.vue'
	export default {

		mounted () {
			this.certified()
		},

		data () {
			return {
				title: '',
				competitionName: '',
				deadline: '',
				type: '应用开发',
				number:'',
				qq:'',
				url: '',
				text: '',
				maxLength: 200,
				showTeammatesSelect: false,
				teammates: [],
			}
		},
		methods: {

			certified () {
				ajax.send('GET', '/api/self', data, function (err, response) {
					if (err) { return }
					let res = JSON.parse(response);
					if (res.status == 'error') { 
						window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=86705621eba5382a&redirect_uri=http://f.yiban.cn/iapp171981"
					}
				})
			},
	

			// Use weui.js, help us to realize the Picker. 
			typePicker () {
				let $vue = this
				weui.picker([
				{
				    label: '创业大赛',
				    value: 0,
				},
				{
				    label: '应用开发',
				    value: 1
				},
				{
				    label: '学科学术',
				    value: 2
				},
				{
				    label: '科技大赛',
				    value: 3,
				},
				{
				    label: '摄影影视',
				    value: 4,
				},
				{
				    label: '金融大赛',
				    value: 5,
				},
				{
				    label: '公益大赛',
				    value: 6,
				},
				{
				    label: '其它',
				    value: 7,
				}
				], {
				   className: 'competition-type-picker',
				   container: 'body',
				   defaultValue: [0],
				   onChange: function (result) {
				   },
				   onConfirm: function (result) {
				       $vue.type = result[0].label
				   },
				   id: 'singleLinePicker'
				});
			},

			// test
			postData () {
				let membersId = [];
				this.teammates.forEach(function (item) {
					membersId.push(item.userId)
				})
				let contact = `${this.number},${this.qq}`;
				let data = {
					title: this.title,
					intro: this.text,
					compet: {
						name: this.competitionName,
						type: this.type,
						ddl: this.deadline,
						url: this.url,
					},
					demand: this.text,
					members: membersId,
					contact: contact
				}
				ajax.send('POST', '/api/groups', data, function (err, data) {
					if (err) {return}
					weui.toast('发布成功', {
					    duration: 1500,
					    className: 'custom-classname',
					    callback: function(){window.location.href = "/#/team"}
					})
				})
			},

			// Show teammates components 
			showSelect () {
				this.showTeammatesSelect = true
			},

			addTeammates (teammates) {
				console.log(teammates)
				this.teammates = teammates
				this.showTeammatesSelect = false
			},
		},


		computed: {

			// Control the length of description
			disabled () {
				return this.text.length == this.maxLength ? true : false
			}

		},
		components: {
			searchBar,
			teammates,
			myHeader,
		}
	}
</script>

<style lang='scss'>
	.weui-cell {
		margin: 10px 0;
	}

	.post-btn {
		padding: 20px 8em;
		a {
			color: #fff !important;
    		background-color: #fb4651 !important;
    		border-color: #fb4651 !important;
    		line-height: 2em !important;
    		font-size: 1em !important;
		}
		a:active {
			background-color: #cc3b44 !important;
		}
	}

	.competition-type-picker {
		#weui-picker-confirm {
			color: #fb4651 !important;
		}
	}

	.team-mask {
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background:#eee;
		z-index: 1000;
		transition: width .5s;
		width: 0;
	}

	.teammates-enter-active, .teammates-leave-active {
		transition: all .5s;
	}

	.teammates-enter, .teammates-leave-to {
		transform: translateX(100%);
	}
	

	.team-members {
		display: flex;
		.team-member-item {
			margin: 5px;
			width: 36px;
			height: 36px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}

</style>