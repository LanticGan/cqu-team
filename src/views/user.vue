<template>
	<div class="user-info">
		<my-header headerName="用户信息"></my-header>
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
			</div>
			<div class="resume-text">
				<p>{{resume}}</p>
			</div>
		</div>

		<div class="p-posted">
			<div class="p-block-description">
				<img src="src/assets/img/posted.png" alt="">
				<span>发布过的</span>
			</div>
			<content-list :items="groupsList"></content-list>
		</div>

		<footer-tab></footer-tab>
	</div>
</template>

<script>
	import footerTab from '../components/footer.vue'
	import myHeader from '../components/header.vue'
	import contentList from './content-list.vue'
	export default {
		name: 'user',
		mounted () {
			this.fetchUserData(this.$route.params.userId)
			this.getGroupList(this.$route.params.userId)
		},
		data () {
			return {
				avatar: '', 
				name: '',
				resume: '',
				groupsList: [],
			}
		},
		methods: {
			fetchUserData (id) {
				let [that, data] = [this, {}];
				ajax.send('GET', `/api/users/${id}`, data, function (err, response) {
					if (err) { return }
					let res = JSON.parse(response);
					if (res.status == 'ok') { 
						let data = res.data;
						that.name = data.name
						that.avatar = data.avatar
						that.resume = data.resume
					}
				})
			},
			getGroupList (id) {
				let that = this;
				ajax.send('GET', `/api/users/${id}/group`, {}, function (err, response){
					if (err) {
						return
					} else {
						let groups = JSON.parse(response).data;
						if (groups.length) {
							groups.forEach(function (item) {
								item.url = {
									name: 'content',
	                                params: {
	                                	contentId: `${item.id}`
	                                }
								}
							})
							that.groupsList = groups
						} 
					}
				})
			}
		},
		components: {
			footerTab,
			myHeader,
			contentList,
		},
	}
</script>