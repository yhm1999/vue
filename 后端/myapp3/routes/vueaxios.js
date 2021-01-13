var express = require('express');
var router = express.Router();
////导入：模拟的宇宙唯一id
// var uuid = require("node-uuid");
//导入：sql/user.js
//成功将代码导入到云数据库
const user = require('../sql/user')




/* GET home page. */
// 在地址栏输入localhost:5001/vueaxios=》去找routes/vueaxios.js文件=》在云数据库的user集合里面去找数据，请求的数据发送到页面
router.get('/', function(req, res, next) {
    //前面是get方式传递参数，在后台用req.query接受，在cmd查看
    console.log(req.query)
  user.find({},(err,data)=>{
    if(err){
      console.log(err)
    }
    console.log(data)
    // 响应的数据发送到页面
    res.send(data)

     //页面渲染，找views/user.ejs
    // res.render('user', {
    //   index:2,
    //   data:data
    // });
  })
  
});


// 在地址栏输入localhost:5001/vueaxios/a=》去找routes/vueaxios.js文件的=》'/a'=》定义数据，请求的数据发送到页面
// router.get('/a', function(req, res, next) {
//     // 自定义数据
//     var data ={
//         msg:'前端请求成功',
//         code:200,
//         name:'这个用户是正确的 我们的用户'

//     }
//     //响应的数据发送到页面
//     res.send(data)
    
//   });


  //以下post  vue接口
//   router.post('/', function(req, res, next) {
//        //前面是post方式传递参数，在后台用req.body接受，在cmd查看

//     console.log(req.body)
//    user.find({},(err,data)=>{
//      if(err){
//        console.log(err)
//      }
//      console.log(data)
 

//      res.send(data)
 
    
//    })
   
//  });
 



module.exports = router;