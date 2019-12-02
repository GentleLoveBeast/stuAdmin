<template>
  <div>
    <el-col :span="6" :offset="9">
      <h2>Create an account</h2>
      <el-card shadow="always">
        <span>Username or email address</span>
        <el-input v-model="username" placeholder="Please enter your user name"></el-input>
        <div class="password">
          <span>Password</span>
        </div>
        <el-input v-model="password" placeholder="Please enter your password"></el-input>
        <router-link to="/manage/home">
          <el-button class="registerbtn" type="success" @click="registerbtn">Sign up</el-button>
        </router-link>
      </el-card>
      <el-card class="login" shadow="hover">
        New to System?
        <router-link to="/login">Login</router-link>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    registerbtn(){
      this.$axios.post("/register",{username:this.username,password:this.password})
        .then(res => {
          console.log('注册成功');
          console.log(res)
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
}
</script>

<style lang="less" scoped>
h2{
  text-align: center
}
.password{
  margin-top: 20px;
}
.registerbtn{
  width: 100%;
  margin-top: 20px;
}
.login{
  margin-top: 20px;
}
</style>
