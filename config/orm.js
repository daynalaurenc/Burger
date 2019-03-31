// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


// selectAll()
// insertOne()
// updateOne()


var connection = require('./connection.js')

// This is an object relational map
var orm ={
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result)
		});
	},
	insertOne: function(name, dev, cb){
		var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)";
		
		connection.query(queryString, [name, dev], function (err, result){
			cb(result);
		})
	},
	updateOne: function(id, cb){
		var queryString= "UPDATE burgers SET devoured = true WHERE id = ?";
		

		connection.query(queryString, [id],  function(err, result){
			cb(result)
		})
	}
}

module.exports = orm;
