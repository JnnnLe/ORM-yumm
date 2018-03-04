var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {

  burger.all(function(data) {
    var hbsObj = {
      burgers: data
    };

    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

module.exports = router;
// Update schema for boolean value once burgur has been devoured?