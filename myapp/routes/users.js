var express = require('express');
var router = express.Router();


function midll (req,res,next){
  console.log("1er midlle");
  next()
}
function midll2 (req,res,next){
  res.send("HELLO")
  res.sendFile("../public/images/20190526_203245.jpg",err=>console.log("s"))
  res.download('../public/images/20190526_203245.jpg')
  console.log("2er midlle");
}

/* GET users listing. */
router.get('/', midll,midll2)
//  {
  // res.send('respond with a resource');
  // next()
// }
// );

module.exports = router;
