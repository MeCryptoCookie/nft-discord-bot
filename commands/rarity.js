const Discord = require('discord.js');

module.exports = {
	name: "rarity",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('For all your rarity needs, we recommend these great tools made by our beloved community member Kris. If you like using them, feel free to donate him a bit of your gas! You can do this through either of the two websites below, they both have a donation section!\n' + 
		'\n**Rarity @ Pixl Tools:** <https://pixls.nft-tools.xyz/>\n**Rarity @ Pixlton Car Club Tools:** <https://pixlton-cars.nft-tools.xyz/>.');
	},
};
