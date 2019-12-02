<template>
    <div class="menu_container">
      <el-scrollbar style="height: 100%;">
        <el-row class="tac">
          <menuheader></menuheader>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <XXGL></XXGL>
            <DHYY></DHYY>
            <DHSE></DHSE>
            <DHSS></DHSS>
          </el-menu>
        </el-row>
      </el-scrollbar>
    </div>
</template>
<script>
import menuheader from './menu_header.vue';
import XXGL from './navigation/XXGL.vue';
import DHYY from './navigation/DHYY.vue';
import DHSE from './navigation/DHSE.vue';
import DHSS from './navigation/DHSS.vue';
export default{
	methods:{
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
  },
  components:{
    menuheader,
    XXGL,
    DHYY,
    DHSE,
    DHSS
  }
}
</script>
<style lang="less" scoped>
.menu_container{
  height: 100%;
}
.el-menu-vertical-demo{
  width: 100%;
  height: 100%;
}
.el-menu-vertical-demo{
  text-align: center;
}
</style>