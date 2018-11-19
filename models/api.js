var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/demodb');


var mongoschema = mongoose.Schema;

var userschema = {
	"username":"String",
	"password":"String"
};

module.exports = mongoose.model("login",userschema);