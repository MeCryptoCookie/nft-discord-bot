
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "cock",
	execute(message, args) {
      return message.channel.send({files:["https://c.tenor.com/9UYcubgaPTYAAAAC/chicken-giant.gif"]});
}};
