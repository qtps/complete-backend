const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.get("/about", (req, res) =>{
    res.send("This is about page which you requested me");
})

app.get("/home", (req, res) =>{
    res.send("This is home page content");
})

app.listen(3000);
