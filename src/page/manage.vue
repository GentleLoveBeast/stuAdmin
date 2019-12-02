<template>
	<div class="app_container">
		<el-container>
			<el-header class="header">
				<v-header></v-header>
			</el-header>
			<el-container class="app_content">
				<el-aside class="aside"  width="248px">
					<v-menu></v-menu>
				</el-aside>
				<el-main class="main">
					<div class="main_view">
						<router-view></router-view>
					</div>
				</el-main>
			</el-container>
			<el-footer class="footer">
				<v-footer></v-footer>
			</el-footer>
		</el-container>
		
	</div>
</template>

<script>
import header from "../components/header/header.vue";
import menu from "../components/menu/menu.vue";
import footer from "../components/footer/footer.vue";
export default {
	data(){
		//组件中的data必须是function
		return{
			msg:"123"
		};
	},
	methods:{
		show(){
			console.log("调用了login.vue中的show方法");
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	created(){
		// 验证是否登录
		const that = this
		this.$axios.get("/inspect")
			.then(res => {
				if(res.data.err_code==0){
					console.log("成功登陆")
				} else {
					that.$router.push({ path: '/login' })
				}
			})
			.catch(function(error) {
				console.log(error);
			})
	},
	components:{
		'v-header':header,
		'v-menu':menu,
		'v-footer':footer
	}
}
</script>

<style lang="less" scoped>
.app_container{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  height: 100vh;
	overflow: hidden;
	.header,.footer{
		background-color: #B3C0D1;
    color: #333;
		text-align: center;
		line-height: 60px;
	}
	.app_content{
		position: relative;
		.main{
			background-color: #E9EEF3;
			color: #333;
			padding-left: 268px;
			width: 100vw;
			height: 100%;
			text-align: center;
			position: absolute;
		}
		.aside{
			background-color: #545c64;
			color: #333;
			
			height: 100%;
			position: absolute;
			z-index: 99;
		}
	}
	el-scrollbar{
		height: 100%;
	}
	.el-scrollbar__wrap {
		overflow-x: hidden;
	}
}
</style>