const express = require('express');
const schedule = require('../models/schedulemodel');


//  create schedule   

const creatschedule =  async(res,req)=> {
  
    try {
        const result = await schedule.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " schedule not create "});
    }
};

// get all schedule 


const getallschedule =  async(req , res )=> {
  
    try {
        const result = await schedule.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " schedule not create "});
    }
};


// get schedule by id 

const getschedulebyid =  async(req,res) => {

 try {
        const result = await schedule.findByIdAndUpdate(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " schedule not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update schedule

const updateschedule =  async(req,res) => {

    try {
           const result = await schedule.findById(req.params.id , req.body , {new: true});
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " schedule not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   // delete schedule

   const destroyschedule =  async(req,res) => {

    try {
           const result = await schedule.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " schedule was deleted"});
           }
           else {
               res.status(404).json({ error : " schedule not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports =  {  getallschedule , getschedulebyid , destroyschedule , updateschedule , creatschedule } ; 
