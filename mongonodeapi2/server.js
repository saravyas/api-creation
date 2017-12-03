var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongodata = require("./models/api");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/",function(req,res){
	res.send("am sara")
})

router.route("/users")
		.get(function(req,res){
				var resposne = {}
				mongodata.find({},function(err,data){
					if(err){
						response = {"error":true,"msg": "error got while performing Operation"}
					}
					else{
						response = {"error":false,"msg":data}
					}
					res.json(data);
					console.log(data);
				});
		})
		.post(function(req,res){
			var db = new mongodata();
			var response = {};
			db.username = req.body.username;
			db.password = require('crypto')
						  .createHash('sha1')
						  .update(req.body.password)
						  .digest('base64');
			console.log(db);
			db.save(function(err,data){
				if(err){
					response = {"error":true}
				}
				else{
					response = {"error":false}
				}
				res.json(data)
			});
		});


router.route("/users/:id")
		.get(function(req,res){
			var response = {};
//			mongodata.findOne({username: req.params.username},function(err,data){
			mongodata.findById(req.params.id,function(err,data){
				if(err){
					reponse = {"err":true,"message":"Error fetching"}
				}
				else{
					response ={"err":false,"message":data}
				}
				res.json(response);
				console.log(response);
			});
		}) 
		.put(function(req,res){
			var response = {};
			mongodata.findById(req.params.id,function(err,data){
				if(err){
					response = {"error":true,"message":"error while fetching data"}
				}
				else{
					if(req.body.username !== undefined){
						data.username = req.body.username;
					}
					if(req.body.password !== undefined){
						data.password = req.body.password;
					}					
					data.save(function(err){
						if(err){
							response = {"err":true,"message":error}
						}
						else{
							response = {"error":false,"message":req.params.id};
						}
						res.json(data);
					})
				}
			})
		})
		.delete(function(req,res){
			var response = {};
			mongodata.findById(req.params.id,function(err,data){
				if(err){
					response = {"error":true,"message":"error"}
				}
				else{
					mongodata.remove({_id:req.params.id},function(err){
						if(err){
					response = {"error":true,"message":"error while deleting"}							
						}
						else{
												response = {"error":false,"message":data}
						}
						res.json(data);
					});
				}
			})
		})

app.use("/",router);		
 









app.listen(3000);