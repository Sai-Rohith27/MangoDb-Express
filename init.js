const mongoose=require("mongoose");
const express=require("express");
const app=express();
const port=9099;
const path=require("path");
const chat=require("./models/chats");
main().then(()=>{
    console.log("Connection Successfull!");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');   
}
let allchats=[
    {
          from:"Sai",
        to:"rohi",
        msg:"Hey howru ?",
        created: new Date()
    },
    {
          from:"Sa",
        to:"roh",
        msg:"Hai howru ?",
        created: new Date()
    },{
          from:"venk",
        to:"rama",
        msg:"Hey ok ?",
        created: new Date()
    },
    {
          from:"vas",
        to:"rohitjh",
        msg:"Hey howru by the way?",
        created: new Date()
    },
    {
        from:"someone",
        to:"someone",
        msg:"Something",
        created:new Date()
    }
];

chat.insertMany(allchats);
