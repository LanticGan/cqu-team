<template>
	<div id="post">
	<form action="" method="post" enctype="multipart/form-data" id="identify-form">
		<div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">比赛名称</label></div>
            <div class="weui-cell__bd">
                <input v-model="title" class="weui-input"  placeholder="请输入比赛名称">
            </div>
        </div>
        <div class="weui-cell" @click="typePicker">
            <div class="weui-cell__hd"><label class="weui-label">比赛类别</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input"  :value="type" disabled="disabled" placeholder="请选择比赛类别">
            </div>
        </div>
        <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">截止日期</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="date" v-model="deadline">
                </div>
           </div>
        <div class="weui-cell">
            <div class="weui-cell__hd">
            	<label class="weui-label">团队成员</label>
            </div>
        </div>
        <div class="weui-cell" style="margin-top: 4em;">
            <div class="weui-cell__bd">
	            <textarea v-model="text" class="weui-textarea" :disabled="disabled" placeholder="请简单描述您的招募需求~" rows="3"></textarea>
	            <div class="weui-textarea-counter"><span>{{text.length}}</span>/{{maxLength}}</div>
            </div>
        </div>
        <div class="post-btn" @click="postData">
        	<a href="javascript:;" class="weui-btn weui-btn_plain-default">发布需求</a>
        </div>
	</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: '',
				deadline: '',
				text: '',
				maxLength: 200,
				type: '',
			}
		},
		methods: {
			typePicker () {
				let $vue = this
				weui.picker([
				{
				    label: '应用开发',
				    value: 0,
				},
				{
				    label: '创新大赛',
				    value: 1
				},
				{
				    label: '学科比赛',
				    value: 3
				},
				{
				    label: '其它',
				    value: 4,
				}
				], {
				   className: 'competition-type-picker',
				   container: 'body',
				   defaultValue: [0],
				   onChange: function (result) {
				   },
				   onConfirm: function (result) {
				       $vue.type = result[0].label
				   },
				   id: 'singleLinePicker'
				});
			},
			postData () {
				console.log(this.title, this.type, this.text, this.deadline)
			}
		},
		computed: {
			disabled () {
				return this.text.length == this.maxLength ? true : false
			}
		},
	}
</script>

<style lang='scss'>
	.weui-cell {
		margin: 10px 0;
	}

	.post-btn {
		padding: 20px 8em;
		a {
			color: #fff !important;
    		background-color: #fb4651 !important;
    		border-color: #fb4651 !important;
    		line-height: 2em !important;
    		font-size: 1em !important;
		}
		a:active {
			background-color: #cc3b44 !important;
		}
	}

	.competition-type-picker {
		#weui-picker-confirm {
			color: #fb4651 !important;
		}
	}
</style>