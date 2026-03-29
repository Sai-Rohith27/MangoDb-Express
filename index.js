const express=require("express");
const app=express();
const port=9099;
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./models/chats");
console.log("welcome to app");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extented:true}));
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
   console.log(chats);
     res.render("index",{chats});
});
app.get("/",(req,res)=>{
   res.send("Working");
});
app.post("/chats",(req,res)=>{
         let {from,msg,to}=req.body;
         let newchat=new chat(
           { from:from,
            to:to,
            msg:msg,
            created:new Date()
           }
         );
         newchat.save().then((res)=>{console.log("chat saved in db")
         }).catch((err)=>{console.log(err)
         });
         res.redirect("/chats");
});
app.get("/chats/new",(req,res)=>{
    res.render("new");
})
app.listen(port,()=>{
    console.log(`server running on ${port}...`);
})

