const Discord = require('discord.js');

module.exports = {
	name: "rarity",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('For all your rarity needs, we recommend these great tools made by our beloved community member Kris. If you like using them, feel free to donate him a bit of your gas!\n' + 
		'\n\nRarity @ Pixl Tools: https://pixls.nft-tools.xyz/\nRarity @ Pixlton Car Club Tools: https://pixlton-cars.nft-tools.xyz/.');
	},
};
