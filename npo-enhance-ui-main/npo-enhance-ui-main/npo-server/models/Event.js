// name: "Food Distribution",
//       date: "2024-12-20",
//       location: "Los Angeles",
//       description: "Distributing food to the needy",
const mongoose=require('mongoose')
const Eventschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const Event=mongoose.model("event",Eventschema)
module.exports=Event;