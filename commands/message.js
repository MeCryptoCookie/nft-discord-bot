const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_MESSAGE_COMMAND || "message",
	execute(message, args, client) {

    if(!message.member.hasPermission("BAN_MEMBERS"))
    {
      return message.channel.send('Nah bro!');
    }

    if (!args.length) {
      return message.channel.send(`You didn't provide a channel ID or message, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Channel id must be a number!`);
    }

    if(args[1].startsWith("http")) {
      let url = args[1];      
      const channel = client.channels.cache.get(args[0]);
      channel.send(args.slice(2).join(' '), {files:[url]});
    }
    else {
      const channel = client.channels.cache.get(args[0]);
      channel.send(args.slice(1).join(' '));
    }
}};
