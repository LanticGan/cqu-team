<template>
	<article class="weui-article">
		<h1>{{contentId}}</h1>
		<h2>比赛名称</h2>
		<p>{{competitionName}}</p>
		<h2>比赛时间</h2>
		<p>{{competitionTime}}</p>
		<h2>简介</h2>
		<p>{{description}}</p>
		<h2>成员</h2>

	</article>
</template>

<script>
	export default {
		name: 'contentBlock',
		props: {
			contentId: {
				required: true,
			},
			title: {
				default: 'AAA',
			},
			competitionName: {
				default: 'xxx',
			},
			competitionTime: {
				default: 'xxx-xx-xx',
			},
			description: {
				default: 'AAA',
			}
		},
		data: function () {
			return {}
		},
	}
</script>
<style lang="scss">
	.weui-article {
		padding: 5px 15px !important;
		h1 {
			font-weight: 400;
			text-align: center;
			font-size: 1.5em !important;
			margin-top: 0;
		}
		h2 {
			font-weight: 400;
			font-size: 1.3em !important;
			margin-top: 1em;
			margin-bottom: 0.5em;
		}
	}
</style>