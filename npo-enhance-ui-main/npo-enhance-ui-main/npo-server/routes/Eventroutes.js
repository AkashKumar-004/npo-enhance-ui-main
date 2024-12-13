const express=require('express')
const router=express.Router();
const event=require('../models/Event')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await event.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new event(req.body)
        const savedata=await newprojects.save()
        res.status(201).json(savedata)
    }
    catch(error)
    {
        console.log(error)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const current=await event.findOne({_id:id})
        if(!current)
        {
            res.status(404).json("not found")
        }
        const deletedata=await event.findByIdAndDelete(id)
        console.log(deletedata)
        res.status(200).json("deleted")
    } catch (error) {
        res.json(error)
    }
})
router.put('/edits/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const current=await event.findOne({_id:id})
        if(!current)
        {
            res.status(404).json("Not found")
        }
        const updatedata=await event.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(500)
    }
})
module.exports=router;