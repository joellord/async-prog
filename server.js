const express = require("express");
const app = express();

const port = 3000;

const BASE_DELAY = 1200;

app.get("/ingredients/bread", function(req, res) {
    setTimeout(()=>{res.status(200).send("Got bread 🍞")}, BASE_DELAY*2.5);
});

app.get("/ingredients/peanutbutter", function(req, res) {
    setTimeout(()=>{res.status(200).send("Got PB 🥜")}, BASE_DELAY*1.2);
});

app.get("/ingredients/jam", function(req, res) {
    setTimeout(()=>{res.status(200).send("Got jam 🍓")}, BASE_DELAY*1.5);
});

app.get("/spread/peanutbutter", function(req, res) {
    setTimeout(()=>{res.status(200).send("Spreaded PB 🥜")}, BASE_DELAY*2);
});

app.get("/spread/jam", function(req, res) {
    setTimeout(()=>{res.status(200).send("Spreaded jam 🍓")}, BASE_DELAY);
});

app.get("/close", function(req, res) {
    setTimeout(()=>{res.status(200).send("Sandwich is closed and ready to eat 🥪")}, BASE_DELAY/2);
});

app.listen(port, function () {
  console.log("Ready to serve a PB&J sandwich on port " + port)
});