const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_RECRUITME_COMMAND || "recruitme",
	execute(message, args) {

		let role = message.member.guild.roles.cache.find(role => role.name === "PCC Recruits");
		
		console.log(role);

		if (role) 
		{
			message.guild.members.cache.get(message.author.id).roles.add(role);

			var arr = [
				"Seems a bit dim-witted, but if we can't find any better...", 
				"Guess we need cannon fodder too.", 
				"Ooooh, such a fine specimen!", 
				"Calling you Casio, cause we can count on you!",
				"The voices in my head don't like you.",
				"If you're bringing your friends, I'll come alone too.",
				"Not as dumb as that other one looks.",
				"IQ probably doesn't exceed shoe size.",
				"Your mommy loves you. But she's the only one.",
				"Pure perfection!",
				"I'd insult you, but you're not bright enough to notice!",
				"Your face and my ass could be twins.",
				"It's not Halloween yet. Oh that's your face...",
				"We don't insult people. We just give negative compliments.",
				"You remind me of a penny. Worthless."
			];

			return message.channel.send(`${arr[Math.floor(Math.random() * arr.length)]} ${message.author}`);
		}
	}
};
