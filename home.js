const express = require("express")
const app = express();
const fs = require('fs')
const path = require('path')
app.use(express.urlencoded())

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'tamplet'))
app.get('/', (req, res) => {
    res.render('front.pug')
})
app.post("/", (req, res) => {
    name = req.body.name
    age = req.body.age
    let output = `name is${name} ${age}`
    res.render("front.pug")
    fs.writeFileSync('output.txt' , output)
})
app.listen(80, (req, res) => {
    console.log("server is runnig at port 80.... ")
})