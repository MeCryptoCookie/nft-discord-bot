const fetch = require('node-fetch');
const { openseaCollectionsUrl } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_WENMOON_COMMAND || "wenmoon",
	execute(message, args) {

  // Otherwise, current date will be used:
  const phase = lunarPhase();
  const age = lunarAge();
  const emoji = lunarPhaseEmoji();

  console.log(phase);
  console.log(age);
  console.log(emoji);
  
  const embedMsg = new Discord.MessageEmbed()
  .setTitle(`${emoji} Tonight's a ${phase} ${emoji}`);

  message.channel.send(embedMsg);
}};

const Hemisphere = {
  NORTHERN: "Northern",
  SOUTHERN: "Southern",
};

const LunarEmoji = {
  NorthernHemisphere: {
    NEW: "🌑",
    WAXING_CRESCENT: "🌒",
    FIRST_QUARTER: "🌓",
    WAXING_GIBBOUS: "🌔",
    FULL: "🌕",
    WANING_GIBBOUS: "🌖",
    LAST_QUARTER: "🌗",
    WANING_CRESCENT: "🌘",
  },

  SouthernHemisphere: {
    NEW: "🌑",
    WAXING_CRESCENT: "🌘",
    FIRST_QUARTER: "🌗",
    WAXING_GIBBOUS: "🌖",
    FULL: "🌕",
    WANING_GIBBOUS: "🌔",
    LAST_QUARTER: "🌓",
    WANING_CRESCENT: "🌒",
  },
};

const LunarPhase = {
  NEW: "New",
  WAXING_CRESCENT: "Waxing Crescent",
  FIRST_QUARTER: "First Quarter",
  WAXING_GIBBOUS: "Waxing Gibbous",
  FULL: "Full",
  WANING_GIBBOUS: "Waning Gibbous",
  LAST_QUARTER: "Last Quarter",
  WANING_CRESCENT: "Waning Crescent",
};

const EPOCH = 2440587.5;
const LUNATION_BASE_JULIAN_DAY = 2423436.6115277777;
const PHASE_LENGTH = 3.69132346322;
const SYNODIC_MONTH = 29.53058770576;

const fromDate = (date = new Date()) => {
  const time = date.getTime();
  return time / 86400000 - date.getTimezoneOffset() / 1440 + EPOCH;
};

const toDate = (julian) => {
  let date = new Date();
  date.setTime((julian - EPOCH + date.getTimezoneOffset() / 1440) * 86400000);
  return date;
};

const lunarAge = (date = new Date()) => {
  const percent = lunarAgePercent(date);
  return percent * SYNODIC_MONTH;
};

const lunarAgePercent = (date = new Date()) => {
  return normalize((fromDate(date) - 2451550.1) / SYNODIC_MONTH);
};

const lunarPhase = (date = new Date()) => {
  const age = lunarAge(date);

  if (age < 1.84566173161) return LunarPhase.NEW;
  else if (age < 5.53698519483) return LunarPhase.WAXING_CRESCENT;
  else if (age < 9.22830865805) return LunarPhase.FIRST_QUARTER;
  else if (age < 12.91963212127) return LunarPhase.WAXING_GIBBOUS;
  else if (age < 16.61095558449) return LunarPhase.FULL;
  else if (age < 20.30227904771) return LunarPhase.WANING_GIBBOUS;
  else if (age < 23.99360251093) return LunarPhase.LAST_QUARTER;
  else if (age < 27.68492597415) return LunarPhase.WANING_CRESCENT;

  return LunarPhase.NEW;
};

const lunarPhaseEmoji = (date = new Date(), hemisphere = Hemisphere.NORTHERN) => {
  const phase = lunarPhase(date);

  return emojiForLunarPhase(phase, hemisphere);
};

const emojiForLunarPhase = (phase, hemisphere = Hemisphere.NORTHERN) => {
  let emoji;

  if (hemisphere === Hemisphere.SOUTHERN) {
    emoji = LunarEmoji.NorthernHemisphere;
  } else {
    emoji = LunarEmoji.SouthernHemisphere;
  }

  switch (phase) {
    case LunarPhase.WANING_CRESCENT:
      return emoji["WANING_CRESCENT"];
    case LunarPhase.LAST_QUARTER:
      return emoji["LAST_QUARTER"];
    case LunarPhase.WANING_GIBBOUS:
      return emoji["WANING_GIBBOUS"];
    case LunarPhase.FULL:
      return emoji["FULL"];
    case LunarPhase.WAXING_GIBBOUS:
      return emoji["WAXING_GIBBOUS"];
    case LunarPhase.FIRST_QUARTER:
      return emoji["FIRST_QUARTER"];
    case LunarPhase.WAXING_CRESCENT:
      return emoji["WAXING_CRESCENT"];

    default:
    case LunarPhase.NEW:
      return emoji["NEW"];
  }
};

const normalize = (value) => {
  value -= Math.floor(value);
  if (value < 0) {
    value += 1;
  }

  return value;
};