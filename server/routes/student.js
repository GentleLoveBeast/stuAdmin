var express = require('express')
var router = express.Router()

var student = require('../model/student')
var studentModel = student.studentModel

/**
 * 添加学生信息
 */
router.get('/addstu', function (req, res, next) {
  /**
   * 不需要给添加req的date,mongoose有default会自动添加
   */
  studentModel.create(req.query, function (err, result) {
    if (err) {
      console.log("添加数据失败")
      return res.status(200).json({
        status: 500,
        data: '添加数据失败'
      })
    }
    res.status(200).json({
      status: 0,
      data: '添加成功'
    })
  })
})

/**
 * 查找所有学生
 */
router.get('/findAll', function (req, res) {
  studentModel.find({}, function (err, result) {
    if (err) {
      console.log("查询失败")
      return res.status(200).json({
        err_code: 500,
        msg: '查询学生信息失败，请稍后再试！'
      })
    }
    // 也可以这样返回
    // res.status(200).send(result)
    res.status(200).json({
      err_code: 0,
      data: result
    })
  })
})

/**
 * 索引学生
 */
router.get('/findbyname', function (req, res) {
  console.log(req.query)
  var body = req.query
  if (body.name == '') {
    body = {}
  } else {
    /**
     * 或者用$or,模糊查询用$regex,也可在body处理数据用RegExp实现不区分大小写等
     */
    body.name = { $regex: body.name }
  }
  studentModel.find(body, function (err, result) {
    if (err) {
      console.log("查询失败")
      return res.status(200).json({
        err_code: 500,
        msg: '查询学生信息失败，请稍后再试！'
      })
    }
    // 也可以这样返回
    // res.status(200).send(result)
    res.status(200).json({
      err_code: 0,
      data: result
    })
  })
})

/**
 * 通过Id查找学生
 */
router.get('/findbyid',function(req,res){
  studentModel.findById(req.query.id,function(err,person){
    if(err){
      console.log('查询失败')
      return res.status(200).json({
        err_code: 500
      })
    }else{
      res.status(200).json({
        err_code: 0,
        data: person
      })
    }
  })
})

/**
 * 修改学生信息
 */
router.get('/updatedata', function (req, res) {
  let body=req.query
  let updateData=body._id
  let newfield={}
  newfield.name=body.name
  newfield.province=body.province
  newfield.city=body.city
  newfield.gender=body.gender
  newfield.hobbies=body.hobbies
  // 多条全部更新,将multi设置为true,不设置时默认第一条
  let option={multi:false}
  studentModel.update({_id: updateData},{$set:newfield},option,function(err,result){
		if(err){
			console.log("数据更新失败")
			return res.status(200).json({
        err_code: 0,
        msg: '修改数据失败，稍后重试'
      })
		}
    res.status(200).json({
      err_code: 0,
      msg: '修改成功'
    })
	})
})

/**
 * 删除学生信息
 */
router.get('/delbyid',function(req,res){
  studentModel.remove({_id:req.query.id},function(err){
		if(err){
			console.log("删除数据失败")
			return res.status(200).json({
        err_code: 500
      })
		}
		res.status(200).json({
      err_code: 0,
      msg: '删除成功'
    })
	})
})

module.exports = router
