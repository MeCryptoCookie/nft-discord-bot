
const Discord = require('discord.js');

module.exports = {
	name: "hype",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.find(emoji => emoji.name === "hype");
		return message.channel.send(`${someEmoji} ${someEmoji} ${someEmoji}`);
}};
