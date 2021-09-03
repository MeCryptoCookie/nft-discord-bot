const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_MESSAGE_COMMAND || "message",
	execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a channel ID or message, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Channel id must be a number!`);
    }

    let c = message.guild.channels.find(ch => ch.name === 'collabland-config');
    c.send(args.slice(1).join(' '));
    //message.channel.send(args.slice(1).join(' '));
}};
