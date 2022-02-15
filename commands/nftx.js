const Discord = require('discord.js');

module.exports = {
	name: "nftx",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('Want to learn more about our vault? Go check out our Medium post about it at: ');
	},
};
