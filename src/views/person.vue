<template>
	<div class="user-info">
		<my-header headerName="个人主页"></my-header>
			<div class="user-avatar">
				<img src="../assets/img/favicon.jpg" alt="avatar" id="ava">
			</div>
			<div class="user-name">
				Lantic
			</div>
		<footer-tab></footer-tab>
	</div>
</template>

<script>
	import footerTab from '../components/footer.vue'
	import myHeader from '../components/header.vue'
	export default {
		name: 'person',
		data () {
			return {}
		},
		components: {
			footerTab,
			myHeader,
		},
	}
</script>

<style lang="scss">
	.user-info {
		.user-avatar {
			width: 6em;
			height: 6em;
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

</style>