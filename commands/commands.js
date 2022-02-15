const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_COMMANDS_COMMAND || "commands",
	execute(message, args) {
      return message.channel.send('```!stats - Get a collection of stats for Pixls.\n'+
	  '!carstats - Get a collection of stats for PCC.\n' + 
	  '!pixl [id] - Get all attributes for a given Pixl.\n' + 
	  '!car [id] - Get all attributes for a given Car.\n' + 
	  '!wenmoon - Find out what the moon is up to.\n' + 
	  '!ceiling - Some feel good.\n' + 
	  '!lfg - LFG!!!!1!\n' + 
	  '!bok - Bok boooook!\n' + 
	  '!cluck - Cluck-cluuuck!\n' + 
	  '!rank - Fancy roles, but what are the rules?\n' + 
	  '!nftx - Let me tell you how that works.\n' + 
	  '!rarity - Learn more about rarities.```');
}};
