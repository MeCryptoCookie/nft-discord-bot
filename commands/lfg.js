
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "lfg",
	execute(message, args) {
      return message.channel.send('<:pet:892672777918758973> <:pet:892672777918758973> <:pet:892672777918758973>');
}};
