<template>
	<div id="header">
		<span>{{headerName}}</span>
		<router-link to="/post">
			<div id="add-info"></div>
		</router-link>
	</div>	
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {}
		},
		props: {
			headerName: {
				default: '组队系统'
			}
		}
	}
</script>

<style lang="scss">
	#header {
		position: relative;
		$headerHeight: 2em;
		padding: 4px 0;
		text-align: center;
		background: #fff;
		font-size: 1.4em;
		color:#fb4651;
		height: $headerHeight;
		line-height:$headerHeight;
		border-bottom:solid 1px #efefef;
	}

	#add-info {
		position: absolute;
		right: 6px;
		top: 50%;
		transform: translateY(-15px);
		height:30px;
		width: 30px;
		background: url(../assets/img/add.png);
		background-size: 100%;
	}

</style>