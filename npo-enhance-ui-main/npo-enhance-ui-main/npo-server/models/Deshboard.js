// name: "Education Program",
//       location: "District A, State B, 123456",
//       contact: "education@service.com",
//       description: "Providing educational resources to underprivileged children.",
//       image: "https://via.placeholder.com/150",
//       duration: "6 months",
//       impact: "100+ children educated",
const mongoose=require('mongoose')
const Desboardschema=new mongoose.Schema({
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
    }
})
const Desboard=mongoose.model("service",Desboardschema)
module.exports=Desboard;