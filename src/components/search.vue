<template>
<div>
	<div class="bar" id="searchBar">
		<form @submit.prevent="onSubmit">
			<div class= "search-bar__box" :class="{ 'active': isSearching }">
				<input v-model="conditions" type="text" id="search-input" class="search-bar__input" :placeholder="inputHolder">
				<label @click="searching" id="search-text" for="search-input">
					<img src="../assets/img/search3.png">
					<span id="searchM">搜索</span>
				</label>
				<span id="cancelM" @click="cancelSearch">取消</span>
			</div>
		</form>
    </div>
    <content-list :conditions="conditions"></content-list>
</div>
</template>
<script>
	import contentList from '../views/content-list.vue'
	export default {
		name: 'searchBar',
		data: function () {
			return {
				isSearching: false,
				inputHolder: '',
				conditions: '',
			}
		},
		methods: {
			searching: function () {
				this.isSearching = true
				this.inputHolder = '搜索'
			},
			cancelSearch: function () {
				this.isSearching = false
				this.inputHolder = ''
			},
			onSubmit: function (event) {
				event.preventDefault();
				
			}
		},
		components: {
			contentList
		}
	}
</script>
<style lang="scss">
	#searchBar {
		position: relative;
		background: #EFEFF4;
		padding: 0.6em 0;
	}

	.search-bar__box {
			padding: 0 0.8em;
			position: relative;
			color: #707070;
			.search-bar__input {
				width: 100%;
				height:1.8em;
				box-sizing: border-box;
				font-size:14px;
				border: 0;
				border-radius: 6px;
				padding-left:1.8em;
			}
			#search-text {
				display:flex;
				justify-content: center;
				align-items: center; 
				position: absolute;
				top: 0;
				left: 0;
				height: 1.8em;
				width:100%;
				font-size: 14px; 
 				img {
 					margin-right: 6px;
					width: 16px;
					height: 16px;
				}
			}
 			#cancelM {
				position: absolute;
				right: 0.9em;
				top: 0.2em;
				font-size:16px;
				color: #f8767e;
				display: none;
			} 
		}

	.active {
		padding-right: 3.6em;
		#search-text {
			justify-content: flex-start;
			padding-left: 1.4em;
			#searchM {
				display: none;
			}
		}
		#cancelM {
				display: block;
			}
	}

</style>