const { search, searchNames } = require('./api')
const express = require("express");

// Creating express app object
const app = express();

// Handling '/' route
app.get("/", async (req, res) => {
    const data = await search(req.query)
    res.send(data);
})

// Handling '/' route
app.get("/names", async (req, res) => {
    const data = await searchNames(req.query)
    res.send(data);
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running on http://localhost:3000");
})