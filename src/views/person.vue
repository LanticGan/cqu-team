<template>
	<div class="user-info">
		<my-header headerName="个人主页"></my-header>
		<div class="user-avatar">
			<img src="src/assets/img/favicon.jpg" alt="avatar" id="ava">
		</div>
		<div class="user-name">
			Lantic
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
			            <textarea v-model="resume" class="weui-textarea" :disabled="disabled" rows="3" autofocus="true"></textarea>
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
		data () {
			return {
				resume: '计算机学院大三学生',
				maxLength: 100,
				editActive: false,
				editText: '编辑',
			}
		},
		methods: {
			editAndPost () {
				if (this.editText == '完成') {
					this.editText = '编辑'
					console.log('posting')
				} else {
					this.editText = '完成'
				}

				this.editActive = !this.editActive
			}
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