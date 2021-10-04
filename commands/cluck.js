
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "cluck",
	execute(message, args) {
      return message.channel.send('Cluck-cluuuuuck!! 🐔');
}};
