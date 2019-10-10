const mongoose = require('mongoose');//引入mongoos
mongoose.connect('mongodb://127.0.0.1/mongoose_test',{useNewUrlParser:true,useUnifiedTopology:true});//链接mongoose_test数据库
//connect()方法返回一个状态待定的connection对象
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection errer"))
db.once('open', () => {
  console.log("we're connected!!")
})

//一切始于Schema
const Schema = mongoose.Schema
const members = new Schema({
  account: String,
  password: String,
  name: String
})

//创建名为ryHerose的集合
//将Schema 编译成一个Model(集合的构造函数)参数（modelName要映射的集合名，约束的模式对象）
let myMembers = mongoose.model('myMembers', members);


module.exports = myMembers

