 const mongoose = require('mongoose');
   const UserSceem = mongoose.Schema({
    Email:String,
    UserName:String,
    Password:String

   })
    
   module.exports= mongoose.model("User",UserSceem)