<template>
	<div class="content-list">
		<div class="content-item" v-for="item in items">
			{{ item.name }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'contentList',
		props: {
			filter1: {
				type: String,
				default: '',
			},
			filter2: {
				type: String,
				default: '',
			},
		},
		data () {
			return {
				items: [
					{
						name: 'gan'
					},
					{
						name: 'yang'
					},
					{
						name: 'zhou'
					},
					{
						name: 'wei'
					},
				]
			}
		}
	}
</script>

<style lang="scss">
	.content-item {
		padding: 1em;
		height: 10em;
		border-bottom: 1px solid #e8e8e8;
	}
</style>