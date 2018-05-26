class Plugin {
	constructor() { }
	authenticate() {
		throw new Error("not implemented")
	}
	getChats() {
		throw new Error("not implemented")
	}
	createChat(person) {
		throw new Error("not implemented")
	}
	createGroupChat(people) {
		throw new Error("not implemented")
	}
	getFriends() {
		throw new Error("not implemented")
	}
	addFriend(person) {
		throw new Error("not implemented")
	}
	receiveMessage(message) {
		throw new Error("not implemented")
	}
}

module.exports = Plugin
