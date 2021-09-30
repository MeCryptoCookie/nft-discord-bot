
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "lfg",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.find(emoji => emoji.name === "pet");
		return message.channel.send(`${someEmoji} ${someEmoji} ${someEmoji}`);
}};
