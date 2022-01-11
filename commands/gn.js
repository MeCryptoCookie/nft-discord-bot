
const Discord = require('discord.js');

module.exports = {
		name: "gn",
		execute(message, args, client) {
			const someEmoji = client.emojis.cache.find(emoji => emoji.name === "gn");
			return message.channel.send(`${someEmoji}`);
	}
};
