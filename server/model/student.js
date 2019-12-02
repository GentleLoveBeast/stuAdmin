var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/blog")

//得到数据库连接句柄
var db = mongoose.connection
//通过数据库连接句柄，监听mongoose连接数据库成功的事件
db.on("open", function (err) {
  if (err) {
    console.log("连接数据库失败")
    throw err
  }
  console.log("连接数据库成功")
})

var Schema = mongoose.Schema

/**
 * Schema的第二个参数
 * ,{
 *    versionKey:false
 *  }
 *则插入的数据不会有_v，_v表示版本号
 */
var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['0', '1'],
    default: '0'
  },
  date: {
    type: Date,
    default: Date.now
  },
  province:{
    type:String
  },
  city:{
    type:String
  },
  hobbies: {
    type: String
  }
})

//直接导出模型构造函数
var studentModel = mongoose.model('Student', studentSchema)

module.exports = {
  studentModel: studentModel
}