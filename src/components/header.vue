<template>
	<div id="header">
		<span>组队系统</span>
	</div>	
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {}
		}
	}
</script>

<style lang="scss">
	#header {
		$headerHeight: 2em;
		padding: 4px 0;
		text-align: center;
		background: #fb4651;
		font-size: 1.4em;
		color:#fff;
		height: $headerHeight;
		line-height:$headerHeight;
	}

</style>