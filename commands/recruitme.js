const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_RECRUITME_COMMAND || "recruitme",
	execute(message, args) {
		return message.channel.send(`Too late dum dum. Got enough recruits! ${message.author}`);
	}
};
