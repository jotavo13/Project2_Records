const express = require('express');
const Fiber  = require('../models/Fiber');
const router = express.Router();
const mongoose = require("mongoose");



//==============ROUTES============================



// // Summary
// router.get('/summary', (req, res) => {
//  res.render('fibers/summary.ejs')
// })




// New
router.get('/new', (req, res) => {
    res.render("fibers/new.ejs")
   })
   

// Post
router.post('/', async (req, res) => {
    console.log(req.body);
	req.body.isItWorking = req.body.isItWorking === 'on' ? true : false;
	const fiber = await Fiber.create(req.body);
	res.redirect('/fibers');
});

   
   //edit
   router.get('/:id/edit', async (req, res) => {
       const fiber = await Fiber.findById(req.params.id);
       res.render("fibers/edit.ejs", {fiber})
   })
   
// Index...show all fiber
    router.get('/', async (req, res) => {
        const fibers = await Fiber.find({});
        console.log(fibers)
        res.render("fibers/index.ejs", {fibers});
    });
   

    // Show...show one fiber
    router.get('/:id', async (req, res) => {
        const fiber = await Fiber.findById(req.params.id);
        // res.send(fruit);
        res.render("fibers/show.ejs", {fiber})
    });
   
//    // Delete
    router.delete('/:id', async (req, res) => {
        const fiber = await Fiber.findByIdAndDelete(req.params.id);
       res.redirect('/fibers');
    });
   
    // Update
    router.put('/:id', async (req, res) => {
        const id = req.params.id;
        req.body.isIt = req.body.isIt === 'on' ? true : false;
        const fiber = await Fiber.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.redirect('/fibers');
    });


module.exports = router;
