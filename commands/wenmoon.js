const fetch = require('node-fetch');
const { openseaCollectionsUrl } = require('../config.json');
const Moon = require('lunarphase-js');
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_FLOOR_COMMAND || "wenmoon",
	execute(message, args) {

  // Otherwise, current date will be used:
  const phase = Moon.lunarPhase;
  const emoji = Moon.lunarPhaseEmoji;
  
  const embedMsg = new Discord.MessageEmbed()
  .setTitle(`${emoji} Tonight's a ${phase} ${emoji}`);

  message.channel.send(embedMsg);
}};