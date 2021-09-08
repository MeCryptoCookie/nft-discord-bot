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

    const channel = client.channels.cache.get(args[0]);
    channel.send(args.slice(1).join(' ', {files:['https://cdn.discordapp.com/attachments/819504041679126528/885088305631334450/unknown.png']}));
}};
