const express=require("express")
const router=express.Router();
const Event=require("../models/Event")
router.post("/add",async (req,res)=>{
const {title,description,date,posterurl,time,tags}=req.body;

try{
   const event= await Event.create({
        title,
        description,
        posterurl,
        date,
        time,
        tags,
       
    })
    console.log("i am in creating")
    await event.save();
   return res.json({message:"ok"})

}
catch(err){
    res.json({message:"error"})
}


})



router.get("/", async (req,res)=>{
    try{
        const events=await Event.find();
        res.json(events); 
    }
    catch (err){

    }

})

router.get("/page/:id",async (req,res)=>{
    const {id}=req.params;
    
    console.log("id",id)
    const event=await Event.findById(id);
    console.log("event",event)
    res.json(event)

})



module.exports=router;