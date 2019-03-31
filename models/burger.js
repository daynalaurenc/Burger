// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne(cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, cb) {
    orm.updateOne(objColVals, function(res) {
      console.log('here' + res);
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;


// cols = columns; name
// vals = values; dev
// cb = ?? 