var express = require('express')
var app = express()
var Hangouts = require('./hangouts')

app.get('/chats', function (req, res) {
	
})

var h = new Hangouts(function (event, data) {
	console.log(data)
})
