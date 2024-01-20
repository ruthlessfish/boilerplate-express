require('dotenv').config();

let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let msg = "Hello json";
    res.json({"message": (process.env.MESSAGE_STYLE == "uppercase" ? msg.toUpperCase() : msg)});
});

console.log("Hello World");





























 module.exports = app;
