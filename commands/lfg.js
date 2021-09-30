
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "lfg",
	execute(message, args, client) {
		const someEmoji = client.emojis.cache.get("892672777918758973");
		return message.channel.send(`${someEmoji} ${someEmoji} ${someEmoji}`);
}};
