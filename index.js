const express=require("express");
const app=express();
const port=9099;
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./models/chats");
console.log("welcome to app");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main().then(()=>{
    console.log("Connection Successfull!");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');   
}

let chat1=new chat(
    {
        from:"Sai",
        to:"rohi",
        msg:"Hey howru ?",
        created: new Date()
    }
)
chat1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}); 

app.get("/chats",async(req,res)=>{
   let chats= await chat.find();//async function to get data it returns promise 
   res.send("working");
});
app.get("/",(req,res)=>{
    res.send("Welcome");
});
app.listen(port,()=>{
    console.log(`server running on ${port}...`);
})

