const mongoose= require('mongoose');

const DBcon=async()=>{
    try{
        await mongoose.connect('mongodb+srv://akash_2004:17112004akash@npo.dmmxb.mongodb.net/?retryWrites=true&w=majority&appName=npo')
        console.log("DB CONNECTED");
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports=DBcon;