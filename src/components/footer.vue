<template>
	<div id="footer">
		<div class="nav-list">
			<router-link class="nav-item" ref="infoDom" to="/info">
				<span id="homeImg"></span>
		
			</router-link>
			<router-link class="nav-item" to="/team">
				<span id="teamImg"></span>
	
			</router-link>
			<router-link class="nav-item" to="/mine">
				<span id="mineImg"></span>
		
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer',
		data () {
			return {}
		},
	}
</script>

<style lang="scss">

	$footHeight: 2.8em;

	#footer {
		position: fixed;
		bottom: 0;
		background: #f6f6f6;
		width: 100%;
		height: $footHeight;
		.nav-list {
			height:100%;
			display: flex;
			.nav-item {
				height:100%;
				line-height: $footHeight;
				text-decoration: none;
				color: #c2cfcc;
				display: block; 
				flex: 1;
				text-align: center;
				& * {
					vertical-align: middle;
				}
				#teamImg {
					background-image: url("../assets/img/team-black.png");
					background-size: 100%;
					width: 30px;
					height: 30px;
					display: inline-block;
				}
				#homeImg {
					background-image: url("../assets/img/home-black.png");
					background-size: 100%;
					width: 30px;
					height: 30px;
					display: inline-block;
				}
				#mineImg {
					background-image: url("../assets/img/mine-black.png");
					background-size: 100%;
					width: 30px;
					height: 30px;
					display: inline-block;
				}
 			}
		}
	}

	.router-link-active {
		#homeImg {
			background-image: url("../assets/img/home2.png") !important;
				}
		#teamImg {
			background-image: url("../assets/img/team2.png") !important;
		}
		#mineImg {
			background-image: url("../assets/img/mine-red.png") !important;
		}
	}


</style>