var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const { urlencoded } = require('body-parser');
var login_db = require("./login_db");
const path = require('path');

var app = express();
app.use(bodyParser);
app.use(express.json());
app.use(urlencoded());
app.use('/', router);
app.listen(80);
// var login_handler = require ('login_handler.js');

router.get('/', (req, res) => {
    // var user = req.body.username;
    // var pass = req.body.password;
    // var db = login_db();
    // var db_data = await db.findByUser(user, pass);

    // if (db_data != undefined) {
    //     res.sendFile(path.join(__dirname+'/index.html'));
    // }
    console.log(res);
})


