// import express
const express = require("express")

// create app
const app = express();

// ROUTES
app.get("/", (req,res) => {
    // res.send(`99 Bottles of beer on the wall`)
    res.render("index.ejs")
})

app.get("/:number_of_bottles", (req,res) => {
    const bottles = req.params.number_of_bottles
    res.render(`numberBottles.ejs`, {bottles})
})


// Listener
app.listen(3000, () => {
    console.log("listening on port 3000.")
})