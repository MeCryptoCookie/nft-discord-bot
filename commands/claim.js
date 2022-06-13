const Discord = require('discord.js');

module.exports = {
	name: "claim",
	execute(message, args) {
    message.suppressEmbeds(true);
    return message.channel.send('**How can I claim my Peep?**\nGo to our claim page (<https://pixltonnft.com/claim-peeps>), connect your wallet, select the Pixltonians you want to claim for and hit the claim button.\n\n**How can I check if a Pixltonian has an open claim to a Peep?**\nGo to <https://pixltonnft.com/claim-peeps> and you‘ll be able to enter your Pixltonian‘s ID to check.');
	},
};
