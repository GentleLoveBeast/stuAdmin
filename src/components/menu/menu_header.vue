<template>
  <div class="menu_container">
    <div class="headerimg">
      <img src="../../images/0.jpg" alt="">
    </div>
    <div class="headertext">
      <span class="headername">admin</span>
      <span class="headertag">管理员</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.menu_container{
  background-color: rgb(75, 74, 74);
  display: flex;
  justify-content: space-evenly;
  .headerimg{
    display: flex;
    width: 60px;
    height: 60px;
    border: 2px solid #999;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .headertext{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color:#fff;
    .headername{
      font-size: 16px;
    }
    .headertag{
      font-size: 14px;
    }
  }
}
</style>