"use strict";

const express = require("../node_modules/express/index"),
   chalk = require("chalk"),
   app = express();

app.use(log, express.static(__dirname + "../"));

app.route("/").get((req, res, next) => {
   
});

function log(req, res, next) {

   console.log("Request : ", req.url);

   next();
}

app.listen(8000);
