const fetch = require('node-fetch');
const { openseaCollectionsUrl } = require('../config.json');
import * as Moon from 'lunarphase-js';
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_FLOOR_COMMAND || "wenmoon",
	execute(message, args) {

  // For a specific date, pass a date object to a function:
  const date = new Date();
  const phase = Moon.getLunarPhase(date);
  // Otherwise, current date will be used:
  const phase = Moon.getLunarPhase();

  const embedMsg = new Discord.MessageEmbed()
  .setTitle(`Tonight's a ${phase}`);

  message.channel.send(embedMsg);
}};