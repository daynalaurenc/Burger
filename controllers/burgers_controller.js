var express = require("express");

var burger = require("../models/burger");

var router = express.Router();


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burger: data});
    });
});

router.post("/create", function(req, res) {
  console.log("body @ burg_controller.js", req.body);
  // burger.insertOne(req.body.type, falsefunction(){
    burger.insertOne(req.body.type, false, function(result){
        console.log(result)
        res.redirect("/");
   });
});

router.post("/update/:id", function(req, res) {
  burger.updateOne(req.params.id, function(err, data){
        res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;
