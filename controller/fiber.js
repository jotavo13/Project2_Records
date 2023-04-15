const express = require('express');
const Fiber  = require('../models/Fiber');
const router = express.Router();

isItWorknig


// Post
router.post('/', async (req, res) => {
	console.log(req.body)
	req.body.isItWorknig = req.body.isItWorknig === 'on' ? true : false;
	const fiber = await Fiber.create(req.body);
	res.redirect('/fiber');
});


// New
router.get('/new', (req, res) => {
    res.render("fiber/new.ejs")
   })
   
   // /fruits/123/edit
   router.get('/:id/edit', async (req, res) => {
       const fiber = await Fiber.findById(req.params.id);
       res.render("fiber/edit.ejs", {fiber})
   })
   
   // Index...show all fiber
   router.get('/', async (req, res) => {
       const fiber = await Fiber.find({});
       res.render("fiber/index.ejs", {fiber});
   });
   
   // Show...show one fiber
   router.get('/:id', async (req, res) => {
       const fiber = await Fiber.findById(req.params.id);
       // res.send(fruit);
       res.render("fiber/show.ejs", {fiber})
   });
   
   // Delete
   router.delete('/:id', async (req, res) => {
       const fiber = await Fiber.findByIdAndDelete(req.params.id);
       res.redirect('/fiber');
   });
   
   // Update
   router.put('/:id', async (req, res) => {
       const id = req.params.id;
       req.body.isItWorknig = req.body.isItWorknig === 'on' ? true : false;
       const fiber = await Fiber.findByIdAndUpdate(id, req.body, {
           new: true,
       });
       res.redirect('/fiber');
   });


module.exports = router;
