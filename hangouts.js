var Plugin = require('./plugin')
var Client = require('hangupsjs')

Client.authStdin()

class Hangouts extends Plugin {
	constructor (handle) {
		super()
		this.handle = handle
		this.client = new Client()
		this.client.on('chat_message', function (message) {
			handle('message', {message: message})
		}.bind(this))
	}

	authenticate (credentials) {
		this.client.connect({creds: Promise.resolve(credentials.token)}).then(function () { handle('authenticated', {}) })
	}

	setup () {

	}
}

module.exports = Hangouts
