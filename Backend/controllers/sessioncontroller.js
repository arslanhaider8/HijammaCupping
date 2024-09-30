const express = require('express');
const session = require('../models/sessionmodel');


//  create session   

const creatsession =  async(req , res )=> {
  
    try {
        const result = await session.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " session not create "});
    }
};

// get all session 


const getallsession=  async(req , res )=> {
  
    try {
        const result = await session.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " session not create "});
    }
};


// get session by id 

const getsessionbyid =  async(req,res) => {

 try {
        const result = await session.findById(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " session not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update session

const updatesesison =  async(req,res) => {

    try {
           const result = await session.findByIdAndUpdate(req.params.id , req.body , {new: true});
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " session not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   // delete session

   const destroysession =  async(req,res) => {

    try {
           const result = await session.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " session was deleted"});
           }
           else {
               res.status(404).json({ error : " session not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports = { creatsession , 
   updatesesison , getallsession , getsessionbyid , destroysession }; 
