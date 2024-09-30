const express = require('express');
const invoice = require('../models/invoicemodel');


//  create invoice   

const creatinvoice =  async(req , res )=> {
  
    try {
        const result = await invoice.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " invoice not create "});
    }
};

// get all invoice 


const getallinvoice =  async(req , res )=> {
  
    try {
        const result = await invoice.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " invoice not create "});
    }
};


// get invoice by id 

const getinvoicebyid =  async(req,res) => {

 try {
        const result = await invoice.findById(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " invoice not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update invoice

const updateinvoice =  async(req,res) => {

    try {
           const result = await invoice.findByIdAndUpdate(req.params.id , req.body , { new: true });
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " invoice not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };
   
    // delete invoice
   const destroyinvoice =  async(req,res) => {

    try {
           const result = await invoice.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " invoice was deleted"});
           }
           else {
               res.status(404).json({ error : " invoice not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports = { creatinvoice , getallinvoice , getinvoicebyid , updateinvoice , destroyinvoice } ; 
