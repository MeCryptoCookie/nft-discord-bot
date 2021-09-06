const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_MESSAGE_COMMAND || "message",
	execute(message, args, client) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a channel ID or message, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Channel id must be a number!`);
    }

    const embedMsg = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle('#42069 Some fucker was sold!')
              .setThumbnail('https://pbs.twimg.com/media/E-R-dWCXMAMvgoD?format=png&name=small');
	    	    
	  embedMsg.addField("Sold For", `WHO CARES`, true);
	  embedMsg.addField("Buyer", `JOIN ME`, true);

    const channel = client.channels.cache.get(args[0]);
    channel.send(embedMsg);
}};
