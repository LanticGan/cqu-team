<template>
	<div id="footer">
		<div class="nav-list">
			<router-link class="nav-item" ref="infoDom" to="/info">
				<span id="homeImg"></span>
				<span>信息</span>
			</router-link>
			<router-link class="nav-item" to="/team">
				<span id="teamImg"></span>
				<span>团队</span>
			</router-link>
			<router-link class="nav-item" to="/mine">
				<span id="mineImg"></span>
				<span>我的</span>
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
					background-image: url("../assets/img/team1.png");
					background-size: 100%;
					width: 24px;
					height: 24px;
					display: inline-block;
				}
				#homeImg {
					background-image: url("../assets/img/home1.png");
					background-size: 100%;
					width: 24px;
					height: 24px;
					display: inline-block;
				}
				#mineImg {
					background-image: url("../assets/img/mine1.png");
					background-size: 100%;
					width: 24px;
					height: 24px;
					display: inline-block;
				}
 			}
		}
	}

	.router-link-active {
		background: rgba(251, 70, 81, 0.1);
		color: #f8767e !important;
		#homeImg {
			background-image: url("../assets/img/home2.png") !important;
				}
		#teamImg {
			background-image: url("../assets/img/team2.png") !important;
		}
		#mineImg {
			background-image: url("../assets/img/mine2.png") !important;
		}
	}


</style>