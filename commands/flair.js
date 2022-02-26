const Discord = require('discord.js');

module.exports = {
	name: "flair",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('So you want to make it big chump!? Here\'s how:\n' + 
		'\n- **Landlord** is 50+\n- **Slumlord** is 25-49\n- **Smol Chicken** is 10-24\n- **Tasty Omelette** is 2 - 9\n- **Fresh Egg** is 1');
	},
};
