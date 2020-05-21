 const  express = require('express')
 const router = express.Router();
  let User = require('../../Model/user')
  var jwt = require('jsonwebtoken');
   const Scret_key="2424"

   
 router.post('/login',(req,res)=>{

    User.findOne({
      Email: req.body.Email,
      Password: req.body.Password,
    }).then((user) => {
      if (user) {
       
        var token = jwt.sign({user}, Scret_key, { expiresIn: '10s' });

          res.json({ success: true, data:token });
      
      } else {
        return res.json({ success: false, data: "User  is not Found" });
      }
    });
  })


 module.exports=router
   
