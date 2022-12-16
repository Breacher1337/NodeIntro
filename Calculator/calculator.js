const express = require("express")

const app = express()
const PORT = 3000

app.get("/" , function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    res.send("Thank you for posting!")
})

app.listen(PORT, function(){
    console.log("Started listening to port " + PORT)
})