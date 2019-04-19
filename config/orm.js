

var connection = require('./connection')

// This is an object relational map
var orm = {
	selectAll: function (tableInput, callback){
		var queryString = "SELECT * FROM burgers";
		// var queryString = "SELECT * FROM" + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	insertOne: function (name, dev, callback) {
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
		console.log("@ orm.js name, dev", name, dev)
		connection.query(queryString, [name, dev], function (err, result) {
			if(err) {
				console.error(err)
			} else {
				console.log("result @ orm.js", result)
				callback(result);
			}
		})
	},
	updateOne: function (id, callback) {
		var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";


		connection.query(queryString, [id], function (err, result) {
			callback(result);
		})
	}
}

module.exports = orm;
