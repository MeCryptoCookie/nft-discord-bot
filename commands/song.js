const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_RECRUITME_COMMAND || "song",
	execute(message, args) {

		var arr = [
			"*NSYNC - It's Gonna Be Me", 
			"My Chemical Romance - Helena", 
			"Backstreet Boys - The Call", 
			"Die Antwoord - Baby's On Fire",
			"Fall Out Boy - Sugar, We're Going Down",
			"Panic! At The Disco - I Write Sins Not Tragedies",
			"Paramore - Misery Business",
			"The Red Jumpsuit Apparatus - Face Down",
			"My Chemical Romance - I'm Not Okay (I Promise)",
			"All-American Rejects - Dirty Little Secret",
			"Paramore - That's What You Get",
			"Yellowcard - Ocean Avenue",
			"Yellowcard - Only One",
			"My Chemical Romance - Welcome To The Black Parade",
			"30 Seconds To Mars - The Kill",
			"Blink 182 - I Miss You",
			"Linkin Park - Numb"
		];

		return message.channel.send('I quit listening to music bro. World domination takes up all my time.'); //`Currently listening to: ${arr[Math.floor(Math.random() * arr.length)]} ${message.author}`);
	}
};
