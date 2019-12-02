/*由于webpack是基于node进行够贱的，
所有webpack的配置文件中任何合法的node代码都是支持的*/
var path=require('path')

//在内存中，根据指定的模板页面生成一份内存中的首页，
//同时自动把打包好的bundle注入到页面底部
//
//如果要配置插件需要在导出的对象中挂载一个plugin节点
var htmlWebpackPlugin=require('html-webpack-plugin')

/*当以命令行形式运行webpack或webpack-dev-server的时候，
工具会发现，我们没有提供要打包的文件的入口和出口文件，
此时他会检查项目根目录的配置文件，并读取这个文件，就拿到了导出的这个配置对象，
然后根据这个对象进行打包构建*/

const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports={
	entry:path.join(__dirname,'./main.js'),//入口文件
	output:{
		path:path.join(__dirname,'./dist'),//输出路径
		filename:'bundle.js'//指定输出文件的名称
	},
	plugins:[
		new VueLoaderPlugin(),
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./index.html'),//指定模板文件路径
			filename:'index.html'//设置生成的内存页面名称
		})
	],
	module:{//配置所有第三方loader模块的
	    rules:[
	        {test:/\.css$/,use:['style-loader','css-loader']},//配置处理css文件的第三方loader规则
	        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=9400'},
	        //limit给定的值是图片的大小一byte为单位，如果引用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，
	        //如果小于给定的limit则会被转为base64的字符串
	        //
	        //图片名称和源图片名称一样
	        //{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=9400&name=[name].[ext]'},
	        //8位哈希值连接源图片名称
	        //{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=9400&name=[hash:8]-[name].[ext]'},
	        //
	        //{test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理less
	    	
	    	//处理BootStrap字体文件的loader
				{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
				{test: /\.less$/,loader: "style-loader!css-loader!less-loader"},
	    	{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
	    	{test:/\.vue$/,use:'vue-loader'}//处理.vue文件的loader
	    ]
	}
}