<template>
<div class="competition-block">
	<myHeader headerName="比赛详情"></myHeader>
	<div class="competition-content">
	</div>
</div>
</template>
<script>
	import myHeader from '../components/header.vue'
	export default {
		data () {
			return {
			}
		},
		mounted () {
			this.fetchData()
		},

		methods: {
			fetchData () {
				let [competitionId, that] = [this.$route.params.competitionId, this];
				let params = {
					id: competitionId,
				};
				ajax.send('GET', '/djangoapi/content', params, function (err, res) {
					if (err) { return }
					let data = JSON.parse(res)
					document.querySelector(".competition-content").innerHTML = data.content
				})
			}
		},
		components: {
			myHeader,
		}
	}
</script>
<style lang="scss">
	.competition-content {
		img {
			width: 100%;
		}
	}

	.competition-title {
		font-size: 1em !important;
		text-align: center;
	}

	.info {
			text-align:center;
			margin-bottom: 0.4em;	
	}
</style>