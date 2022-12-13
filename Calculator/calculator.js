const express = require("express")

const app = express()
const PORT = 3000

app.get("/" , function(request, response) {
    console.log(__dirname)
    response.sendFile(__dirname + "/index.html")
})


app.listen(PORT, function(){
    console.log("Started listening to port " + PORT)
})