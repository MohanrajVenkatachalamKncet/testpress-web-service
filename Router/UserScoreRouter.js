const { response } = require('express');
const express=require('express');
const UserScoreRouter=express.Router();
const UserScoreSchema = require('../Database/Schema/UserScoreSchema');
UserScoreRouter.get("/ping",(req,res)=>{
    res.send("Hai");
})
UserScoreRouter.post("/createUserScore",async(req,res)=>{
    console.log(req.body)
    try{
        const need = new UserScoreSchema({
            ...req.body
        })
        const data = await need.save();
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
});

UserScoreRouter.get("/getUserScore",async(req,res)=>{
    console.log(req.body)
    try{
        
        const data = await UserScoreSchema.find();
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
});
module.exports=UserScoreRouter;