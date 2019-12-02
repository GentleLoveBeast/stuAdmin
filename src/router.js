//导入vue-router包
import VueRouter from 'vue-router'

//导入对应的路由组件
// import HomeContainer from './components/tabbar/HomeContainer.vue'
// import MemberContainer from './components/tabbar/MemberContainer.vue'
// import SearchContainer from './components/tabbar/SearchContainer.vue'
// import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'


import manage from './page/manage.vue'
import Home from './components/main/home.vue'
import Test from './components/main/test.vue'
import Login from './page/login.vue'
import Register from './page/register.vue'


//创建路由对象
var router=new VueRouter({
	routes:[//配置路由规则
		{path:'/',redirect:'/login'},
		{path:'/login',component:Login},
		{path:'/register',component:Register},
		{
			path:'/manage',
			component:manage,
			children:[
				{path:'home',component:Home},
				{path:'test',component:Test}
			]
		}
	]
})
//把路有对象暴露出去
export default router
