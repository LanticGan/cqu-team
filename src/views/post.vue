<template>
	<form action="" method="post" enctype="multipart/form-data" id="identify-form">
		<div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">比赛名称</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input"  placeholder="请输入比赛名称">
            </div>
        </div>
        <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">比赛时间</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="datetime-local" value="" placeholder="">
                </div>
            </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
	            <textarea v-model="text" class="weui-textarea" :disabled="disabled" placeholder="团队简介" rows="3"></textarea>
	            <div class="weui-textarea-counter"><span>{{text.length}}</span>/{{maxLength}}</div>
            </div>
        </div>
        <div class="post-btn">
        	<a href="javascript:;" class="weui-btn weui-btn_plain-default">发布需求</a>
        </div>
	</form>
</template>

<script>
	export default {
		data () {
			return {
				text: '',
				maxLength: 200,
			}
		},
		computed: {
			disabled () {
				return this.text.length == this.maxLength ? true : false
			}
		}
	}
</script>

<style lang='scss'>
	.weui-cell {
		margin: 10px 0;
	}

	.post-btn {
		padding: 20px 8em;
		& :active {
			color: rgba(251,92,101,1) !important;
    		border-color: rgba(251,92,101,1) !important;
		}
	}
</style>