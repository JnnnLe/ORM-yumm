var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objectColVals, condition, cb) {
    orm.updateOne("burgers", objectColVals, condition, function(res) {
      cb(res);
    });
  }
}



module.exports = burger