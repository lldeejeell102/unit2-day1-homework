//**************************************************************************************//
// Import in express
//**************************************************************************************//
const express = require("express")
// Create app object
const app = express()

//**************************************************************************************//
// Middleware
//**************************************************************************************//




//**************************************************************************************//
// Routes
//**************************************************************************************//

// GREETINGS
app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`What's up, ${name}! It's so great to see you!`)
})


// TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req,res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = total * (tipPercentage/100)
    res.send(`your tip should be ${tip}`)
})


// MAGIC 8 BALL
app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req,res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const answer = answers[Math.floor(Math.random() * answers.length)]

    res.send(`<h1>${answer}</h1>`)
})
//**************************************************************************************//
// SERVER LISTENER
//**************************************************************************************//
app.listen(3000, () => {
    console.log("sever is listening...")
})