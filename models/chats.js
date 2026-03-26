const mongoose=require("mongoose");

const chatschema=mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    msg: {
        type:String,
        maxLength:50
    },
    created:{
        type:Date
    }
})
const chat=mongoose.model("chat",chatschema);

module.exports=chat;