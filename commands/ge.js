
const Discord = require('discord.js');

module.exports = {
		name: "ge",
		execute(message, args, client) {
			const someEmoji = client.emojis.cache.find(emoji => emoji.name === "ge");
			return message.channel.send(`${someEmoji}`);
	}
};
