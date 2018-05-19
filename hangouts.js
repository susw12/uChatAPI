var Plugin = require('plugin')
var Client = require('hangupsjs')

class Hangouts extends Plugin {
	constructor () {
		this.client = new Client()
	},
	authenticate (credentials) {
		client.connect({creds: Promise.resolve(credentials.token)})
		setup()
	},
	setup () {
		client.on('chat_message', function () {
			this.receiveMessage()
		}.bind(this))
	}
}

module.exports = Hangouts