
const express = require('express')
  let  db = require('./db/config')
const app = express()
 let User=  require('./Model/user')
var cors = require('cors')
var bodyParser = require('body-parser')
 
const port = 4000
app.use(cors())
app.use(bodyParser.json())
















 app.post('/user',(req,res)=>{

     var signup = new User(req.body)

      signup.save((err,data)=>{
        if (err) {
          return res.json({ success: false, err: err });
        }

        res.json({ success: true, data: data });
      });


 
 })

 
 app.post('/login',(req,res)=>{

  User.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  }).then((user) => {
    if (user) {
     
        res.json({ success: true, data: user });
    
    } else {
      return res.json({ success: false, data: "User  is not Found" });
    }
  });

  //  User.save((err,data)=>{
  //    if (err) {
  //      return res.json({ success: false, err: err });
  //    }

  //    res.json({ success: true, data: data });
  //


})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server is running at:${port}`))