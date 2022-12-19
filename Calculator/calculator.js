const express = require("express")
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/" , function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/calculator.html")
})

app.post("/submit", function(req, res){

    const input1 = req.body.first_number;
    const input2 = req.body.second_number;

    const result = parseInt(input1) + parseInt(input2)
    
    console.log(req.body)
    // path.join(__dirname, '/calculator.html'
    res.sendFile(path.join(__dirname, '/calculator.html'))
})

app.listen(PORT, function(){
    console.log("Started listening to port " + PORT)
})