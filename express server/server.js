const express=require("express");
const app = express();
const bodyparser= require("body-parser");

app.get("/" , function (request , response) {
    response.send("Hello");
});
app.post("/")
app.listen(3000 , function() {
    console.log("server started");
});
