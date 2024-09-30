const express = require('express');
const appointment = require('../models/appointmentmodel');

//  create appointment   

const creatappointment =   async(req , res )=> {
  
    try {
        const result = await appointment.create(req.body);
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " appointment not create "});
    }
};

// get all appointment 


const getallappointment = async(req , res )=> {
  
    try {
        const result = await appointment.find();
        res.json(result);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " appointment not create "});
    }
};


// get appointment by id 

const getappointmentbyid = async(req,res) => {

 try {
        const result = await appointment.findById(req.params.id);
        if(result){
        res.json(result);
        }
        else {
            res.status(404).json({ error : " appointment not found " });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: " Internal Server error "});
    }
};

// update appointment

const updateappointment =  async(req,res) => {

    try {
           const result = await appointment.findByIdAndUpdate(req.params.id , req.body , {new: true});
           if(result){
            res.json(result);
           }
           else {
               res.status(404).json({ error : " appointment not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   //destroy appointment

   const destroyappointment =  async(req,res) => {

    try {
           const result = await appointment.findByIdAndDelete(req.params.id);
           if(result){
            res.json({message : " appointment was deleted"});
           }
           else {
               res.status(404).json({ error : " appointment not found " });
           }
       }
       catch(error){
           console.error(error);
           res.status(500).json({error: " Internal Server error "});
       }
   };

   module.exports = { creatappointment , getallappointment , getappointmentbyid , updateappointment , destroyappointment} ; 

