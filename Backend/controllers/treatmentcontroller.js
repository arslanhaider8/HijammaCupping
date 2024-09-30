const express = require("express");
const treatment = require("../models/treatmentmodel");

//  create treatement

const createtreatment = async (req, res) => {
  try {
    const result = await treatment.create(req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " user not create " });
  }
};

// get all treatment

const getallttreatment = async (req, res) => {
  try {
    const result = await treatment.find();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " user not create " });
  }
};

// get treatment by id

const gettreatmentbyid = async (req, res) => {
  try {
    const result = await treatment.findById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: " User not found " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Internal Server error " });
  }
};

// update treatment

const updatetreatment = async (req, res) => {
  try {
    const result = await treatment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: " User not found " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Internal Server error " });
  }
};

// delete treatement

const destroytreatment = async (req, res) => {
  try {
    const result = await treatment.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: " User was deleted" });
    } else {
      res.status(404).json({ error: " User not found " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Internal Server error " });
  }
};

module.exports = {
  createtreatment,
  updatetreatment,
  getallttreatment,
  gettreatmentbyid,
  destroytreatment,
};
