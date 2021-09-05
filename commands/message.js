const Discord = require('discord.js');


const discordBot = new Discord.Client();
const  discordSetup = (channelId) => {
  ['DISCORD_BOT_TOKEN', 'DISCORD_CHANNEL_ID'].forEach((envVar) => {
    if (!process.env[envVar]) reject(`${envVar} not set`)
  })

  discordBot.login(process.env.DISCORD_BOT_TOKEN);
  discordBot.on('ready', async () => {
    const channel = await discordBot.channels.fetch(channelId);
    return channel;
  });
}

module.exports = {
	name: process.env.DISCORD_MESSAGE_COMMAND || "message",
	execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a channel ID or message, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Channel id must be a number!`);
    }

    const client = await discortSetup(args[0]);
    client.send(args.slice(1).join(' '));
}};
