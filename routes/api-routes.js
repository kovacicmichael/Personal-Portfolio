var path = require("path");
require("dotenv").config();
const api_key = process.env.api_key;
const domain = 'sandbox8d75e1ca83c6447fb6b5de2cf82c6055.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = function(app){
	app.post("/sendForm", function(req, res){
		console.log(req.body)

		var data = {
	      from: req.body.email,
	      to: 'kovacic316@gmail.com',
	      subject: req.body.subject,
	      text: "Sender Name: " + req.body.name + " \n" + "Message: " + req.body.message,
	    };

	    mailgun.messages().send(data, function (error, body) {
        if(error){
          console.log(error)
        }else{
          res.send(true)
        }

		})
	})





}