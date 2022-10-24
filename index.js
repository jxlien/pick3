const {main} = require('./api')
const express = require("express");

// Creating express app object
const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

// Handling '/' route
app.get("/", async (req, res) => {
    const data = await main(req.query)
    res.json({results: data});
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running on http://localhost:3000");
})