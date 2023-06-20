const express = require('express');
const router = express.Router();
const BURGERS = require('../model/jazzyModel');
const jazzyControllers = require('../contollers/jazzyController');

// CREATING BURGERS
router.post('/createBurgers', async (req,res)=>{
    const Jazzy = new BURGERS({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image,
    })
    try{
        const savedJazzy = await Jazzy.save();
        res.status(200).json(savedJazzy);
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

// GETTING ALL BURGERS
router.get('/AllBurgers', async (req,res)=>{
    const allBurgers = await BURGERS.find();
    try{
        res.status(200).json(allBurgers);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

// GETTING SINGLE BURGER
router.get('/SingleBurgers/:burgerId', async (req,res)=>{
    try{
     const singleBurgers = await BURGERS.findById(req.params.burgerId);
     res.status(200).json(singleBurgers);
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

// UPDATING BURGERS
router.patch('/UpdatedBurgers/:burgerId', async (req,res)=>{
    try{
        const updatedBurger = await BURGERS.findByIdAndUpdate({_id: req.params.burgerId},{$set: req.body});
        res.status(200).json(updatedBurger);
    }catch(err){
        res.status(404).json({message: err.message})
    }
})

// DELETING BURGERS
router.delete('/DeletedBurgers/:burgerId', async (req,res)=>{
    try{
        const deletedBurgers = await BURGERS.findByIdAndDelete({_id: req.params.burgerId});
        res.status(200).json(deletedBurgers);
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

module.exports = router;