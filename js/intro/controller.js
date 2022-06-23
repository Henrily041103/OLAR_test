const express = require("express"),
    bodyParser = require("body-parser");
    // User = require ("./login_data");

//app init
var app = express();
// var router = express.Router();

//middleware init
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
 
app.use(require("express-session")({
    secret: ["lmao"],
    resave: false,
    saveUninitialized: false
}));
 
app.listen(80, () => {
    console.log("server running");
})