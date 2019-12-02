var express = require('express')
var md5 = require('blueimp-md5')

var router = express.Router()

/**
 * consumer--用户信息
 */
var consumer = require('../model/user')
var userModel = consumer.userModel

/**
 * 注册账户
 */
router.post('/register', function (req, res, next) {
  // 获取数据
  // 操作数据库
  // 返回响应
  var body = req.body
  // md5处理密码，两层嵌套防止暴力解密，为了安全性更高，之后再加itcast任意字符串
  body.password = md5(md5(body.password) + 'itcast')

  userModel.findOne({
    // 查询条件，或者
    // $or: [
    //   {
    //     useremail: body.useremail
    //   },
    //   {
    //     username: body.username
    //   }
    // ]
    username: body.username
  }, function (err, data) {
    // err_code为前后端约定好得状态码。
    if (err) {
      //不可以throw err，会崩溃，全错。
      return res.status(500).json({
        err_code: 500
        // message: '服务端出错'
      })
    }
    if (data) {
      // 邮箱或者昵称已存在
      return res.status(200).json({
        err_code: 1
        // message: '邮箱或者昵称已存在'
      })
    }
    userModel.create(body, function (err, user) {
      if (err) {
        //数据添加失败
        return res.status(500).json({
          err_code: 500
        })
      }

      //将注册好的信息存入session
      req.session.user = user

      res.status(200).json({
        err_code: 0
        // message: 'ok'
      })
    })
  })
})


module.exports = router
