var express = require('express')
var md5 = require('blueimp-md5')

var router = express.Router()

/**
 * consumer--用户信息
 */
var consumer = require('../model/user')
var userModel = consumer.userModel

/**
 * 验证用户
 */
router.get('/inspect', function (req, res, next) {
  if (req.session.user) {
    return res.status(200).json({
      err_code: 0,
      user: req.session.user
    })
  } else {
    return res.status(200).json({
      err_code: 500
    })
  }
})

/**
 * 用户登录
 */
router.post('/login', function (req, res, next) {
  var body = req.body
  // md5处理密码，两层嵌套防止暴力解密，为了安全性更高，之后再加itcast任意字符串
  body.password = md5(md5(body.password) + 'itcast')

  userModel.findOne({ username: body.username, password: body.password }, function (err, person) {
    if (err) {
      console.log('err')
      return res.status(200).json({
        err_code: 500
      })
    } else {
      req.session.user = person
      return res.status(200).json({
        err_code: 0
      })
    }
  })
})

module.exports = router
