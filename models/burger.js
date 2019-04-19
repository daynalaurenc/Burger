// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    // orm.insertOne('burgers', cols, vals, function(res) {
      orm.insertOne(cols, vals, function(res) {
      console.log("res @ burger.js", res);
      callback(res);
    });
  },
  updateOne: function(object, condition, callback) {
    // orm.updateOne('burgers', object, condition, function(res) {
      orm.updateOne(object, condition, function(res) {
      callback(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
