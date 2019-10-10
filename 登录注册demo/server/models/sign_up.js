/*注册用户*/

const express = require('express');
const router = express.Router();

//引进数据库的myMembers集合
const myMembers = require('./mongoose_test');

//使用bodyParser
// const bodyParser = require('body-parser');//解析,用req.body获取post参数
// app.use(bodyParser.json());//数据JSON类型
// app.use(bodyParser.urlencoded({extended: false}));//解析post请求数据

//使用multiparty解析
const multiparty = require('multiparty');

//获取注册信息
router.post('/', (req, res, next) => {
  //解析formData内容
  let form = new multiparty.Form();
  form.parse(req, (err, fields, file) => {
    if (!err) {
      //对参数进行格式化
      Object.keys(fields).forEach(key=>{
        let [a] = fields[key];
        fields[key] = a;
      })
      //检查账号是否重复
      myMembers.find({ 'account': fields.account }, (find_err,find_res) => {
        if (find_res.length) {
          //账号重复
          console.log("账号已存在",fields,find_res)
          return res.status(200).json({
            err_code: 1,
            message: "用户名已经存在"
          })
        }
        myMembers.create(fields, (creat_err) => {
          if (!creat_err) {
            console.log('数据插入成功',fields,find_res);
            return res.status(200).json({
              err_code: 0,
              message: "用户注册成功"
            })
          }
        })
      });

    }
  })
})

module.exports = router;
