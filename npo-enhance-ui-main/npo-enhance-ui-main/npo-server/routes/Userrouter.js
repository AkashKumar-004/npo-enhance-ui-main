const express=require('express')
const router=express.Router();
const user=require('../models/User')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await user.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new user(req.body)
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router;