const express = require('express');
const review = require('../models/reviewmodel');

//  create review   

const creatreview =   async(req , res )=> {
  
    try {
        const result = await review.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " review not create "});
    }
};

// get all review 


const getallreview =   async(req , res )=> {
  
    try {
        const result = await review.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " review not create "});
    }
};


// get review by id 

const getreviewbyid =   async(req,res) => {

 try {
        const result = await review.findById(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " review not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update review

const updatereview =   async(req,res) => {

    try {
           const result = await review.findByIdAndUpdate(req.params.id , req.body , { new: true } );
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " review not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   // delete review

   const destroyreview =   async(req,res) => {

    try {
           const result = await review.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " review was deleted"});
           }
           else {
               res.status(404).json({ error : " review not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports = {  creatreview , getallreview , getreviewbyid , updatereview , destroyreview} ; 
