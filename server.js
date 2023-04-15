// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();



/////////////////////////////////////////////////////
// Middleware  req => middleware => res
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging// 
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.set('view engine', 'ejs');


// Controller
const fiberController = require('./controller/fiber.js');
app.use('/fiber', fiberController);



app.get('/', (req, res) => {
    res.render('default route');
})

// Listener
app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);