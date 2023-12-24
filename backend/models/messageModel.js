const mongoose=require("mongoose")

const messagemodel=mongoose.Schema({
sender:{type:mongoose.Schema.ObjectId,ref:"User"},



},

{
    timestams:true,
})

const Message=mongoose.model("Message",messagemodel)

module.exports=Message;