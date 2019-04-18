var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burger: data});
    });
});

router.post("/create", function(req, res) {
  burger.insertOne(req.body.type, function(){
        res.redirect('/');
   });
});

router.post("/update/:id", function(req, res) {
  burger.updateOne(req.params.id, function(err, data){
        res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;
