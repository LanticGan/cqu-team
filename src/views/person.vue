<template>
	<div class="user-info">
		<div class="user-avatar">
			<img src="../assets/img/favicon.jpg" alt="avatar" id="ava">
		</div>
		<div class="user-name">
			Lantic
		</div>
	</div>
</template>

<script>
	export default {
		name: 'person',
		data () {
			return {}
		},
	}
</script>

<style lang="scss">
	.user-info {
		margin: 2em 0;

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