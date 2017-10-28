<template>
	<div class="content-list">
		<router-link class="content-item" v-for="item of items" :to="item.url" :key="item.id">
			<div>{{item.name}},{{item.id}}</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'contentList',
		props: {
			conditions: {
				type: String,
				default: '',
			},
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
						name: 'gan',
						id:1,
						url: {
							name: 'content',
							params: {
								contentId: 1,
							}
						}
					},
					{
						name: 'yang',
						id:2,
						url: {
							name: 'content',
							params: {
								contentId: 2,
							}
						}
					},
					{
						name: 'zhou',
						id:3,
						url: {
							name: 'content',
							params: {
								contentId: 3,
							}
						}
					},
					{
						name: 'wei',
						id:4,
						url: {
							name: 'content',
							params: {
								contentId: 4,
							}
						}
					},
					{
						name: 'test',
						id:5,
						url: {
							name: 'content',
							params: {
								contentId: 5,
							}
						}
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
		display: block;
	}
</style>