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

app.get("/tip/:total/:tipPercentage", (req,res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = total * (tipPercentage/100)
    res.send(`your tip should be ${tip}`)
})


// SERVER LISTENER
//**************************************************************************************//
app.listen(3000, () => {
    console.log("sever is listening...")
})