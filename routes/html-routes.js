var path = require("path");


module.exports = function(app){

	//renders index.html
	app.get("/", function(req, res){
		res.sendFile('index.html', { root: path.join(__dirname, '../public') });
	})

	app.get("/home", function(req, res){
		res.sendFile('home.html', { root: path.join(__dirname, '../public') });
	})

	app.get("/portfolio", function(req, res){
		res.sendFile('portfolio.html', { root: path.join(__dirname, '../public') });
	})

	app.get("/technology", function(req, res){
		res.sendFile('technology.html', { root: path.join(__dirname, '../public') });
	})

	app.get("/about", function(req, res){
		res.sendFile('about.html', { root: path.join(__dirname, '../public') });
	})

	app.get("/contact", function(req, res){
		res.sendFile('contact.html', { root: path.join(__dirname, '../public') });
	})

}