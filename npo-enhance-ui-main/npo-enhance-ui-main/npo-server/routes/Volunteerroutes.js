const express=require('express')
const router=express.Router();
const Volunteersec=require('../models/VolunteerSection')

router.get('/all',async(req,res)=>{
    try{
        const fetchprojects=await Volunteersec.find()
        res.json(fetchprojects).status(200)
    }
    catch(error){
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res)=>{
    try{
        const newprojects=new Volunteersec(req.body)
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
        const current=await Volunteersec.findOne({_id:id})
        if(!current)
        {
            res.status(404).json("not found")
        }
        const deletedata=await Volunteersec.findByIdAndDelete(id)
        console.log(deletedata)
        res.status(200).json("deleted")
    } catch (error) {
        res.json(error)
    }
})

module.exports=router;