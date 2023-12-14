// Import in express
//**************************************************************************************//
const express = require("express")
// Create app object
const app = express()


// Middleware


// Routes
app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`What's up, ${name}! It's so great to see you!`)
})


// SERVER LISTENER
//**************************************************************************************//
app.listen(3000, () => {
    console.log("sever is listening...")
})