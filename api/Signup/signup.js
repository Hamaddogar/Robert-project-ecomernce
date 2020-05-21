const express= require('express')
const router = express.Router()
let User=  require('../../Model/user')


router.post('/user',(req,res)=>{

    var signup = new User(req.body)

     signup.save((err,data)=>{
       if (err) {
         return res.json({ success: false, err: err });
       }

       res.json({ success: true, data: data });
     });



})



 module.exports=router;