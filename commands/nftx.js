const Discord = require('discord.js');

module.exports = {
	name: "nftx",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('Want to learn more about our vault? Go check out our Medium post about it at: https://medium.com/@pixlton/our-nftx-vault-an-intro-becac2093a1a');
	},
};
