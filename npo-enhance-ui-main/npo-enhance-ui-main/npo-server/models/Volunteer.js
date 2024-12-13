// name: "John Doe",
//       email: "john.doe@example.com",
//       contact: "123-456-7890", // Added contact field
//       profilePicture: "https://via.placeholder.com/100", // For Volunteers only
//       role: "Volunteer",
//       status: "Active",
const mongoose=require('mongoose')
const Volunteerschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})
const Volunteer=mongoose.model("volunteer",Volunteerschema)
module.exports=Volunteer;