<template>
  <div>
    <el-button
      @click.native.prevent="deleteRow(editscope.$index, editscope.row)"
      type="text"
      size="small"
    >移除</el-button>
    <el-button
      type="text"
      size="small"
      @click="updateRow(editscope.$index, editscope.row);updateopen=true"
    >修改</el-button>
    <!-- 修改信息内容 -->
    <el-dialog title="修改学生信息" class="updateform" :visible.sync="updateopen" :modal-append-to-body="false">
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
      updateopen: false
    }
  },
  methods: {
    updateRow(index, row) {
      // console.log("修改第", index, "行。修改id", row._id)
      this.$axios
        .get("/findbyid", { params: { id: row._id } })
        .then(res => {
          this.form = res.data.data
          // console.log(res.data.data)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    deleteRow(index, row) {
      // console.log("删除第", index, "行。删除id", row._id)
      // 界面上删除行内容
      // rows.splice(index, 1)
      this.$axios
        .get("/delbyid", { params: { id: row._id } })
        .then(res => {
          console.log("删除成功")
          this.$emit('editstu')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    submsg() {
      this.$axios
        .get("/updatedata", { params: this.form })
        .then(res => {
          console.log("修改成功")
        })
        .catch(function(error) {
          console.log(error)
        })
      this.exit()
    },
    exit() {
      this.form = {}
      this.form.gender = "0"
      this.updateopen = false
      this.$emit('editstu')
    }
  },
  props: ["editscope"]
}
</script>

<style lang="less" scoped>
.updateform{
  text-align: center
}
</style>
