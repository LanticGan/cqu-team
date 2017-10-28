const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
        publicPath: '/dist/'
    },

    module: {
    	rules: [
    		{
    			test: /\.vue$/,
    			use: {
    				loader: "vue-loader",
    				options: {
		            	loaders: {
		                	css: extractSass.extract({
		                    	use: 'css-loader'
		                	}),
		                sass: extractSass.extract({
		                    use: ["css-loader", "sass-loader"]
		                	})
		            	}
       				}
    			}
    		},
    		{
    			test: /\.css$/,
    			use: extractSass.extract({
        			use: ["css-loader"]
    			})
			},

    		{
    			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    			use: [{
        			loader: "url-loader",
        			options: {
            			limit: 6000,
            			name: 'src/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
        			}
    			}]
			},
    	]
    },

    devServer: {
    	contentBase: "./",//本地服务器所加载的页面所在的目录
    	historyApiFallback: true,//不跳转
    	inline: true,//实时刷新
  },

  plugins: [
        extractSass
    ]

}