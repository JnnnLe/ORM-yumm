var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObj = {
      burgers: data
    };
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers/", function(req, res) {
  burger.createOne([
    "burger_name"], [req.body.burger_name],
    function(data) {
    res.redirect("/")
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("Condition: ", condition)
  burger.updateOne({
    isDevoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});

module.exports = router;