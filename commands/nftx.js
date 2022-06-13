const Discord = require('discord.js');

module.exports = {
	name: "nftx",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('Want to learn more about our vault? Go check out our Medium post about it at: https://mirror.xyz/pixlton.eth/OYgDABIQ5NzJPRfcFEgkOvb5zlg_yAuR5KZh4Y-JdIo');
	},
};
