const express = require('express');
const inventory = require('../models/inventorymodel');


//  create inventory   

const createinventory =  async(req , res )=> {
  
    try {
        const result = await inventory.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " inventory not create "});
    }
};

// get all inventory 


const getallinventory =  async(req , res )=> {
  
    try {
        const result = await inventory.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " inventory not create "});
    }
};


// get inventory by id 

const getinventorybyid =   async(req,res) => {

 try {
        const result = await inventory.findById(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " inventory not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update inventory

const updateinventory =   async(req,res) => {

    try {
           const result = await inventory.findByIdAndUpdate(req.params.id , req.body , {new: true});
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " inventory not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   //delete inventory

   const destroyinventory =   async(req,res) => {

    try {
           const result = await inventory.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " inventory was deleted"});
           }
           else {
               res.status(404).json({ error : " inventory not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports = { createinventory , getallinventory , getinventorybyid , updateinventory , destroyinventory} ; 
