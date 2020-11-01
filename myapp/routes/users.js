var express = require('express');
var router = express.Router();
var path = require('path'); 


function midll (req,res,next){
  console.log("1er midlle");
  next()
}
function midll2 (req,res,next){
  res.send("HELLO")

  app.get('/', ); 
  // res.sendFile("../public/images/20190526_203245.jpg",err=>console.log("s"))
  // res.download('../public/images/20190526_203245.jpg')
  // console.log("2er midlle");
}

/* GET users listing. */
router.get('/',function(req, res, next){ 

  console.log("__dirname",__dirname);
  var options = { 
      root: path.join(__dirname) 
  }; 
    
  var fileName = 'Hello.txt'; 
  res.sendFile(fileName, options, function (err) { 
      if (err) { 
          next(err); 
      } else { 
          console.log('Sent:', fileName); 
      } 
  }); 
})
//  {
  // res.send('respond with a resource');
  // next()
// }
// );

module.exports = router;
