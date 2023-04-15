const express = require('express');
const { FiberId } = require('../models/FiberId');
const router = express.Router();

// DEFAULT/INDEX of all fiberId
app.get("/fiberId", async (req, res)=>{
    const fiberId = await FiberId.find({})
    res.render("index.ejs", {FiberId})
})

// CREATE an animal on this page
app.get("/fiberId/new", (req, res)=>{
    res.render("new.ejs")
})

//EDIT an animal
app.get("/fiberId/edit/:id", async (req, res)=>{
    const fiberId = await FiberId.findById(req.params.id);
    res.render("edit.ejs", {FiberId})
})

// UPDATE send the updated animal to the DB
app.put("/fiberId/:id", async (req, res)=>{
    const id = req.params.id;
    req.body.extinct = req.body.extinct === "on" ? true:false;
    const fiberId = await FiberId.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect("/fiberId")
})


// SHOW ONE animal
app.get("/fiberId/:id", async (req, res)=>{
    const fiberId = await FiberId.findById(req.params.id);
    res.render("show.ejs", {FiberId})
 })
 
// POST send the new animal to the DB
app.post("/fiberId", async (req, res)=>{
    req.body.extinct = req.body.extinct === "on" ? true : false;
    const fiberId = await FiberId.create(req.body);
    res.redirect("/fiberId")
})


app.delete("/fiberId/:id", async (req, res)=>{
    const fiberId = await FiberId.findByIdAndDelete(req.params.id)
    res.redirect("/fiberId")
})


module.exports = router;
