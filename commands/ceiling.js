const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_MESSAGE_COMMAND || "ceiling",
	execute(message, args) {
      return message.channel.send(`The only ceiling is your imagination!`);
}};
