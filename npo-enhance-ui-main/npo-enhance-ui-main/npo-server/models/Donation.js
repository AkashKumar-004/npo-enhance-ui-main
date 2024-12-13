// name: "John Doe",
//       contact: "123-456-7890",
//       email: "john.doe@example.com",
//       amount: 100,
//       services: "Education Program",
const mongoose=require('mongoose')
const Donationschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    services:{
        type:String,
        required:true
    }
})
const donation=mongoose.model("donation",Donationschema)
module.exports=donation;