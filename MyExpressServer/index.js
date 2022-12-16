const express = require("express")

const path = require("path")

const app = express();

const port = 3000
app.get("/", function(request, response){

    

    response.sendFile(path.join(__dirname + '/index.html'));
    console.log("Huh")
    console.log("Huh")
})

app.listen(port, function() {
console.log("Server started on port " + port)
})