<template>
  <div>
    <el-card
      class="box-card"
      body-style="padding:10px;display: flex;justify-content: space-between;"
    >
      <div class="navleft">
        <div class="searchtxt">
          <el-input
            size="medium"
            placeholder="请输入索引内容"
            maxlength="20"
            v-model="searchtxt"
            clearable
          ></el-input>
        </div>
        <div class="refresh">
          <el-button @click="getallstu" type="success" icon="el-icon-refresh" round></el-button>
        </div>
        <!-- <el-button class="refresh" type="success" @click="getallstu"><i class="el-icon-refresh"></i></el-button> -->
      </div>
      <div class="navright">
        <v-addstu @editstu="editopen"></v-addstu>
      </div>
    </el-card>
    <el-table :data="msg" stripe height="65vh" border>
      <el-table-column fixed="left" prop="name" label="姓名" width="150" column-key="msg"></el-table-column>
      <el-table-column prop="date" label="日期" width="320">
        <template scope="scope">{{ scope.row.date | dateFormat }}</template>
      </el-table-column>
      <el-table-column prop="province" label="省份" width="250"></el-table-column>
      <el-table-column prop="city" label="市区" width="220"></el-table-column>
      <el-table-column prop="gender" label="性别" width="300">
        <template scope="scope">{{scope.row.gender==0?"男":"女"}}</template>
      </el-table-column>
      <el-table-column prop="hobbies" label="爱好" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <v-editstu :editscope="scope" @editstu="editopen"></v-editstu>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import addstu from "./popform/addstu.vue"
import editstu from "./popform/editstu.vue"
export default {
  methods: {
    editopen() {
      this.getallstu()
    },
    getallstu() {
      this.$axios
        .get("/findAll")
        .then(res => {
          this.msg = res.data.data
          // if(res.data.status==0){
          //   this.newslist=res.data.message
          // }else{
          //   Toast('获取失败')
          // }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    findbyname() {
      this.$axios
        .get("/findbyname", { params: { name: this.searchtxt } })
        .then(res => {
          this.msg = res.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  data() {
    return {
      msg: [],
      updateopen: false,
      searchtxt: ""
    }
  },
  created() {
    this.getallstu()
  },
  components: {
    "v-addstu": addstu,
    "v-editstu": editstu
  },
  watch: {
    'searchtxt': function() {
      this.findbyname()
    }
  }
}
</script>

<style lang="less" scoped>
.box-card {
  margin-bottom: 10px;
}
.el-input__inner {
  width: 70px;
}
.navleft {
  width: 100%;
  display: flex;
  align-items: center;
  .searchtxt {
    width: 25%;
  }
  .refresh {
    margin-left: 20px;
    font-size: 18px;
  }
}
.navright {
  width: 10%;
}
</style>