const express = require('express');
const Fiber  = require('../models/user');
const router = express.Router();
const mongoose = require("mongoose");


// New
router.get('/new', (req, res) => {
    res.render("users/newUser.ejs")
   })
   

// Post
router.post('/signup', async (req, res) => {
    const requiredFields = ['firstName', 'lastName', 'email', 'password']
    for(let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i]
        if(!(field in req.body)) {
            const errorMessage = `missing ${field} in request body`
            console.error(errorMessage)
            return res.send(errorMessage)
        }
    }
    //normalizing email
    req.body.email = req.body.email.toLowerCase()
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body
	res.redirect('/fibers');
});
