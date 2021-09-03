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

    const client = new Discord.Client();
    client.login(process.env.DISCORD_BOT_TOKEN);

    let c = client.channels.fetch(parseInt(args[0]).toString());
    c.send(args.slice(1).join(' '));
}};
