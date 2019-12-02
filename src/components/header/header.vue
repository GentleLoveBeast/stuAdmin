<template>
  <div class="header_container">
    <div class="headerlogo">
      <img src="../../images/TB.png" alt="">
    </div>
    <div class="usermessage">
      <img src="../../images/0.jpg" alt="">
      <el-dropdown>
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="usericon">

      </div>
      <i class="el-icon-bell"></i>
      <el-button @click="getsession">session</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{}
    }
  },
  methods:{
    getsession(){
      this.$axios.get("/inspect")
        .then(res => {
          console.log("前台获取session")
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
}
</script>

<style lang="less" scoped>
.header_container{
  display: flex;
  justify-content: space-between;
  .headerlogo{
    height: 60px;
    img{
      width: auto;
      height: 100%;
    }
  }
  .usermessage{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .usericon{
      margin-left: 20px;
    }
  }
}
</style>