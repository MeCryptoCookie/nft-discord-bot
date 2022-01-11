
const Discord = require('discord.js');

module.exports = {
		name: "ga",
		execute(message, args, client) {
			const someEmoji = client.emojis.cache.find(emoji => emoji.name === "ga");
			return message.channel.send(`${someEmoji}`);
	}
};
