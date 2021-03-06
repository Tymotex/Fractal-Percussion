const express = require("express");
const path = require('path');
const app = express();

app.use(express.static("public"));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("main");
});


app.listen(3000, function() {
    console.log("Listening on port 3000");
}); 