const Discord = require('discord.js');

module.exports = {
	name: "claim",
	execute(message, args) {
    message.suppressEmbeds(true);
    return message.channel.send('**How can I claim my car?**\nGo to our wallet page (<https://getpixls.com/wallet>), connect your wallet, select the Pixltonians you want to claim for and hit the claim button.\n\n**How can I check if a Pixltonian has an open claim to a car?**\nGo to <https://getpixls.com/wallet> and you‘ll be able to enter your Pixltonian‘s ID to check.');
	},
};
