<template>
  <div>
    <el-button type="primary" @click="addopen = true">
      添加
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <!-- 添加信息内容 -->
    <el-dialog title="添加学生信息" :visible.sync="addopen">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="省份" :label-width="formLabelWidth">
          <el-input v-model="form.province" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市区" :label-width="formLabelWidth">
          <el-input v-model="form.city" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio v-model="form.gender" label="0">男</el-radio>
          <el-radio v-model="form.gender" label="1">女</el-radio>
        </el-form-item>
        <el-form-item label="爱好" :label-width="formLabelWidth">
          <el-input v-model="form.hobbies" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="exit">取 消</el-button>
        <el-button type="primary" @click="submsg">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        province: "",
        city: "",
        gender: "0",
        hobbies: ""
      },
      formLabelWidth: "120px",
      addopen: false
    }
  },
  methods: {
    submsg() {
      this.$axios
        .get("/addstu", { params: this.form })
        .then(res => {
          console.log(res)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.exit()
    },
    exit() {
      this.form = {}
      this.form.gender = "0"
      this.addopen = false
      this.$emit('editstu')
    }
  }
}
</script>
