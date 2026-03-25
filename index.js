const express=require("express");
const app=express();
const port=9099;
const path=require("path");
const mongose=require("mongoose");
const mongoose = require('mongoose');
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main().then(()=>{
    console.log("Connection Successfull!");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');   
}

app.get("/",(req,res)=>{
    res.send("Welcome");
});
app.listen(port,()=>{
    console.log(`server running on ${port}...`);
})
