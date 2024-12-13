const mongoose=require('mongoose')
// name: "Jane Smith",
// email: "jane.smith@example.com",
// contact: "987-654-3210",
// description: "Interested in assisting with medical camps.",
// role: "Health Camp Volunteer",
// experience: "1 year in healthcare",
// const mongoose=require('mongoose')np
const Volunteersecschema=new mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})
const Volunteersec=mongoose.model("volunteersec",Volunteersecschema)
module.exports=Volunteersec;