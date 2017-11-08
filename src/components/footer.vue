<template>
	<div id="footer">
		<div class="nav-list">
			<router-link class="nav-item" ref="infoDom" to="/info">
				<div class="item-block">
					<span id="homeImg"></span>
					<span class="item-text">信息</span>
				</div>
		
			</router-link>
			<router-link class="nav-item" to="/team">
				<div class="item-block">
					<span id="teamImg"></span>
					<span class="item-text">团队</span>
				</div>
	
			</router-link>
			<router-link class="nav-item" to="/person">
				<div class="item-block">
					<span id="mineImg"></span>
					<span class="item-text">个人</span>
				</div>
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

	$footHeight: 3em;

	#footer {
		position: fixed;
		bottom: 0;
		background: #fff;
		border-top: solid 1px #d9d7d8;
		width: 100%;
		height: $footHeight;
		.nav-list {
			height:100%;
			display: flex;
			.nav-item {
				height:100%;
				text-decoration: none;
				color: #2c2c2c;
				display: block; 
				flex: 1;
				text-align: center;
				padding-top: 3px;
			}
		}
	}

	.item-block {
		font-size:12px;
		.item-text{
			display: block;
		}
		#teamImg {
			background-image: url("../assets/img/team-black.png");
			background-size: 100%;
			width: 26px;
			height: 26px;
			display: inline-block;
		}
		#homeImg {
			background-image: url("../assets/img/home-black.png");
			background-size: 100%;
			width: 26px;
			height: 26px;
			display: inline-block;
		}
		#mineImg {
			background-image: url("../assets/img/mine-black.png");
			background-size: 100%;
			width: 26px;
			height: 26px;
			display: inline-block;
		}
	}
 			

	.router-link-active {
		color: #fb4651 !important;
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