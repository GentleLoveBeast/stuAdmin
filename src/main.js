import Vue from 'vue'
//导入全局css
import './css/index.css'

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入vue-router包
import VueRouter from 'vue-router'
//手动装VueRouter
Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router.js'

import moment from 'moment' 
//定义全局过滤器，处理时间格式
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

import axios from 'axios'
//让axios把Cookie传给服务器
axios.defaults.withCredentials = true;
//设置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:3005'
//全局配置post时候表单数据格式组织形式
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// Vue.use(axios)// 这是错误的写法
Vue.prototype.$axios=axios//调用时this.$axios

//导入app组件
import app from './App.vue'

var vm=new Vue({
	el:'#app',
	data:{
		msg:'123'
	},
	// components:{
	// 	app:app
	// }
	// 这里不能用components只能用render
	// 
	// 
	// render:function(createElements){
	// 	return createElements(app)
	// }
	// s简写render
	render:c=>c(app),
	router:router
})