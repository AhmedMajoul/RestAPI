const express=require("express")
const router = express.Router();
const Contact=require("../model/Contact.js")

router.get("/",(req,res)=>{
    Contact.find()
    .then(contacts=>res.json(contacts))
    .catch(err=>console.log(err))
})
router.post("/",(req,res)=>{
    const {name,email,phone}=req.body
    const newContact=new Contact({name,email,phone})
    newContact.save().then(Contact=>res.send(Contact))
})
router.put("/:_id",(req,res)=>{
    const update=req.body
    Contact.findOneAndUpdate({_id:req.params._id},{$set:update},err=>err?res.sendStatus(500):res.sendStatus(200))
})
router.delete("/:_id",(req,res)=>{
    Contact.findOneAndDelete({_id:req.params._id},err=>err?res.sendStatus(500):res.sendStatus(200))
})
module.exports = router