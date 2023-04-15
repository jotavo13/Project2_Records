require('dotenv').config();
const express = require("express");
const app = express();
const {mongoose} = require("mongoose");
const methodOverride = require("method-override");
const { PORT, DATABASE_URL } = require("./config.js");

// Controller
const fiberIdController = require('./controller/fiber.js');

// Models - Database stuf

const Fiber = require("./models/Fiber.js")

// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// Middleware req -> middleware -> res
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));
app.use(express.json()); //parse JSON data in the request body
app.use(methodOverride('_method'))
app.use(express.static("public")) // serve files from public statically
// without urlencoded we get req.body undefined

app.use((req,res,next) => {
    console.log('this is my own middleware')
    // middleware does something
    // next tells server to do the next thing in the cycle
    next()
})

app.get('/', (req, res) => {
    res.render('default route');
})


const fiberController = require('./controllers/fiber');
app.use('/fiber', fiberController);

// Listener
app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);