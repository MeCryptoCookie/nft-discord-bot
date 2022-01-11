
const Discord = require('discord.js');

module.exports = {
		name: "gm",
		execute(message, args, client) {
			const someEmoji = client.emojis.cache.find(emoji => emoji.name === "gm");
			return message.channel.send(`${someEmoji}`);
	}
};

module.exports = {
	name: "gn",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.find(emoji => emoji.name === "gn");
		return message.channel.send(`${someEmoji}`);
}
};

module.exports = {
	name: "ga",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.find(emoji => emoji.name === "ga");
		return message.channel.send(`${someEmoji}`);
}
};

module.exports = {
	name: "ge",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.find(emoji => emoji.name === "ge");
		return message.channel.send(`${someEmoji}`);
}
};
