
const Discord = require('discord.js');

module.exports = {
		name: "gm",
		execute(message, args, client) {
			const someEmoji = client.emojis.cache.find(emoji => emoji.name === "gm");
			return message.channel.send(`${someEmoji}`);
	}
};
