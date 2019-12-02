<template>
  <div>
    <el-col :span="6" :offset="9">
      <h2>Sign in to System</h2>
      <el-card shadow="always">
        <form>
          <span>Username or email address</span>
          <el-input v-model="username" placeholder="Please enter your user name"></el-input>
          <div class="operation">
            <span>Password</span>
            <router-link to="/register">Forget password?</router-link>
          </div>
          <el-input
            v-model="password"
            :type="pwdtype"
            placeholder="Please enter your password">
            <i slot="suffix" class="el-input__icon el-icon-view" @click="pwdtoggle"></i>
          </el-input>
        </form>
        <router-link to="/manage/home">
          <el-button class="loginbtn" type="success" @click="loginbtn">Sign in</el-button>
        </router-link>
      </el-card>
      <el-card class="register" shadow="hover">
        New to System?
        <router-link to="/register">Create an account</router-link>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      pwdtype:"password"
    };
  },
  methods: {
    pwdtoggle(){
      if(this.pwdtype==="password"){
        this.pwdtype="text"
      } else {
        this.pwdtype="password"
      }
    },
    loginbtn() {
      this.$axios
        .post("/login", { username: this.username, password: this.password })
        .then(res => {
          console.log("登录成功");
        })
        .catch(function(error) {
          console.log("出错");
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  text-align: center;
}
.loginbtn {
  width: 100%;
  margin-top: 20px;
}
.operation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.register {
  margin-top: 20px;
}
</style>
