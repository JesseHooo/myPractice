const express = require('express');
const router = express.Router();

//引进数据库的myMembers集合
const myMembers = require('./mongoose_test');

//处理请求和响应的方式
router.get('/', (req, res, next)=>{
  console.log(req.query);
  myMembers.find(req.query,(find_err,find_res)=>{
    if (!find_res.length) {
      return res.status(200).json({
        err_code: 1,
        message: "账号或密码错误"
      })
    }
    console.log(find_res);
    // res.send(req.query.account)
    return res.status(200).json({
      err_code: 0,
      message: "登录成功！",
      accountInfo: find_res[0]
    })
  })
});

module.exports = router;