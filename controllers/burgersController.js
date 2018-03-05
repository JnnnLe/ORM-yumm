var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  console.log("I'm in my home! Root!");
  burger.all(function(data) {
    var hbsObj = {
      burgers: data
    };
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers/", function(req, res) {
  console.log("I'm in post! API-Burgers");
  burger.createOne([
    "burger_name"], [req.body.burger_name],
    function(data) {
    res.redirect("/")
  });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("I'm in put! API-Burgers-By-Id");
  var condition = "id = " + req.params.id;
  burger.updateOne({
    isDevoured: true
  }, condition, function(data) {
    res.redirect("/");
  })
});

module.exports = router;