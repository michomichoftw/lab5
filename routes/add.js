var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	console.log(req.query.name + "testing");
	console.log(req.query.description);
	var newFriend = {"name":req.query.name,"description":req.query.description,"imageURL":"https://imgflip.com/readImage?iid=412211"};
	data["friends"].push(newFriend);
	res.render('add', data);
 }