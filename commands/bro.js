
const Discord = require('discord.js');

module.exports = {
	name: "bro",
	execute(message, args) {
	  if (!args.length) {
      	return message.channel.send('Bro!');
	  }
	  else {
		return message.channel.send(`${args[0]} bro!`);
	  }
}};
