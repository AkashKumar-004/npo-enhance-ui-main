const express=require('express')
const router=express.Router();
const notification=require('../models/Notification')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await notification.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new notification(req.body)
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})

module.exports=router;