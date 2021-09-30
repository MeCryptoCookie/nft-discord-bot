
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "bok",
	execute(message, args) {
      return message.channel.send('Bok booooook! 🐔');
}};
