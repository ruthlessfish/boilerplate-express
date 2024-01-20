require('dotenv').config();

let express = require('express');
let app = express();

// Static asset middleware
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

//Root Level Request Logger Middleware
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Time Server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
},
(req, res) => {
    res.json({time: req.time});
});

app.get("/json", (req, res) => {
    let msg = "Hello json";
    res.json({"message": (process.env.MESSAGE_STYLE == "uppercase" ? msg.toUpperCase() : msg)});
});

// Echo Server
app.get("/:word/echo", (req, res) => {
    res.json({"echo": req.params.word});
});

// Name - API endpoint
app.route("/name").get((req, res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`});
});

console.log("Hello World");





























 module.exports = app;
