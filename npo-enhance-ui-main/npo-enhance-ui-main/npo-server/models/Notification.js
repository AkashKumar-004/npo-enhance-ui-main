const mongoose=require('mongoose')
// name: "John Doe",
//       amount: 100,
//       service: "Education Program",
//       email: "johndoe@example.com",
const NotificationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
const notification=mongoose.model("notifi",NotificationSchema)
module.exports=notification;