const fetch = require('node-fetch');
const { openseaCollectionsUrl } = require('../config.json');

const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_FLOOR_COMMAND || "wenmoon",
	execute(message, args) {

  const start = Date.now();
  moonType = getMoonPhase(start.getYear(), start.getMonth(), start.getDay());  

  const embedMsg = new Discord.MessageEmbed()
  .setTitle(`Tonight's a ${moonType}`);

  message.channel.send(embedMsg);
}};

function getMoonPhase(year, month, day)
{
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    switch(b) {
      case 0:
        return 'New Moon';
      case 1:
        return 'Waxing Crescent Moon';
      case 2:
        return 'Quarter Moon';
      case 3:
        return 'Waxing Gibbous Moon';
      case 4:
        return 'Full Moon';
      case 5:
        return 'Waning Gibbous Moon';
      case 6:
        return 'Last Quarter Moon';
      case 7:
        return 'Waning Crescent Moon';
    }
    
    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    
    return b;
}