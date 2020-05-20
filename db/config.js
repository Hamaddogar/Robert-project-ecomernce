const mongoose = require('mongoose');

 mongoose.connect("mongodb+srv://Muhammad:Muhammad@cluster0-oset3.mongodb.net/onlineenrollmentsystem?retryWrites=true&w=majority",(err,data)=>{
    console.log("Mongodb connected")
 
 })