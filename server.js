require('dotenv').config();
const express = require("express");
const app = express();
const {mongoose} = require("mongoose");
const methodOverride = require("method-override");
const { PORT, DATABASE_URL } = require("./config.js");

// Controller
const fiberIdController = require('./controllers/fiberId');

// Models - Database stuf

const FiberId = require("./models/FiberId.js")

// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// Middleware req -> middleware -> res
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));
app.use(express.json()); //parse JSON data in the request body
app.use(methodOverride('_method'))
// without urlencoded we get req.body undefined

app.use((req,res,next) => {
    console.log('this is my own middleware')
    // middleware does something
    // next tells server to do the next thing in the cycle
    next()
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.use('/fiberId', fiberIdController);

app.get('/*', (req, res) => {
    res.render("404.ejs")
})

// Listen at the bottom
app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
    
})