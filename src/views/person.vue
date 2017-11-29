<template>
	<div class="user-info">
		<my-header headerName="个人主页"></my-header>
		<div class="user-avatar">
			<img :src="avatar" alt="avatar" id="ava">
		</div>
		<div class="user-name">
			{{name}}
		</div>
		
		<div class="p-resume">
			<div class="p-block-description">
				<img src="src/assets/img/person.png" alt="">
				<span>个人简介</span>
				<span @click="editAndPost" style="float:right;font-size:15px;color:#b9b5b5;font-weight:400;margin-top:0.2em" :class="{'edit-active': editActive}"
				>{{editText}}</span>
			</div>
			<div class="resume-text">
				<p v-show="!editActive">{{resume}}</p>

				<div class="weui-cell" v-show="editActive">
		            <div class="weui-cell__bd">
			            <textarea  id="edit-resume" v-model="resume" class="weui-textarea" :disabled="disabled" rows="3"></textarea>
			            <div class="weui-textarea-counter"><span>{{resume.length}}</span>/{{maxLength}}</div>
		            </div>
		        </div>

			</div>
		</div>

		<div class="p-posted">
			<div class="p-block-description">
				<img src="src/assets/img/posted.png" alt="">
				<span>发布过的</span>
			</div>
			<content-list></content-list>
		</div>

		<footer-tab></footer-tab>
	</div>
</template>

<script>
	import footerTab from '../components/footer.vue'
	import myHeader from '../components/header.vue'
	import contentList from './content-list.vue'
	export default {
		name: 'person',
		mounted () {
			this.fetchUserData()
		},
		data () {
			return {
				avatar: '', 
				name: 'text',
				resume: '',
				maxLength: 100,
				editActive: false,
				editText: '编辑',
			}
		},
		methods: {
			editAndPost () {
				let [that, editResume] = [this, document.getElementById('edit-resume')];
				if (this.editText == '完成') {
					let resumeText = this.resume
					ajax.send('PUT', '/api/self', {resume: resumeText}, function (err, res) {
						if (err) { return }
						console.log(res)
					})
					this.editText = '编辑'
					editResume.blur()
				} else {
					editResume.focus()
					this.editText = '完成'
				}

				this.editActive = !this.editActive
			},

			fetchUserData () {
				let [that, data] = [this, {}];
				ajax.send('GET', '/api/self', data, function (err, response) {
					if (err) { return }
					let res = JSON.parse(response);
					if (res.status == 'error') { 
						window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=86705621eba5382a&redirect_uri=http://f.yiban.cn/iapp171981"
					} else {
						that.name = res.data.name
						that.avatar = res.data.avatar
						if (res.data.resume == null) {
							that.resume = JSON.stringify(res.data.resume)
						} else {
							that.resume = res.data.resume
						}
					}
				})
			},

		},

		computed: {
			disabled () {
				return this.resume.length == this.maxLength ? true : false
			}
		},

		components: {
			footerTab,
			myHeader,
			contentList,
		},
	}
</script>

<style lang="scss">
	.user-info {
		.user-avatar {
			width: 5em;
			height: 5em;
			margin: 1em auto;
			display: flex;
			justify-content: center;
		}

		#ava {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

		.user-name {
			font-size: 1em;
			text-align: center;
		}
	}


	.p-block-description {
		padding: 0.4em 0.8em;
		border-top: solid 1px #efefef;

		& * {
			vertical-align: middle;
		}

		img {
		    width: 22px;
		    height: 22px;
		    margin: 0 4px;
		}

		span {
			font-size: 0.9em;
			font-weight: 600;
		}
	}

	.p-resume {
		margin-top: 1em;
		.resume-text {
			font-family: -apple-system-font,Helvetica Neue,sans-serif;
			word-wrap: break-word;
			color: #575757;
    		padding: 0.6em 1.1em;
    		.weui-cell {
    			margin: 0 !important;
    			padding: 0 !important;
    			&:before {
    				border: 0 !important;
    			}
    		}
		}
	}

	.p-posted {
		margin-top: 1em;
	}

	.edit-active {
		color: blue !important;
	}
</style>