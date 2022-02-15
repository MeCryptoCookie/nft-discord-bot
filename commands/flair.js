const Discord = require('discord.js');

module.exports = {
	name: "rank",
	execute(message, args) {
		message.suppressEmbeds(true);
		return message.channel.send('So you want to make it big chump!? Here\'s how:\n' + 
		'\n- **Landlords** is 50+\n- **Slumlords** is 25-49\n- **Smol Chickens** is 10-24\n- **From Out of Town** is 1 - 9');
	},
};
