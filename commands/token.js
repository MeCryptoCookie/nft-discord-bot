const fetch = require('node-fetch');
const { openseaMetadataUrl } = require('../config.json');

const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_TOKEN_COMMAND || "token",
	execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a token id, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Token id must be a number!`);
    }

    let url = `${openseaMetadataUrl}/${process.env.CONTRACT_ADDRESS}/${args[0]}`;
    let settings = { 
      method: "GET",
      headers: {
        "X-API-KEY": process.env.OPEN_SEA_API_KEY
      }
    };
    
    fetch(url, settings)
        .then(res => {
          if (res.status == 404 || res.status == 400)
          {
            throw new Error("Token id doesn't exist.");
          }
          if (res.status != 200)
          {
            throw new Error(`Couldn't retrieve metadata: ${res.statusText}`);
          }
          return res.json();
        })
        .then((metadata) => {
            const embedMsg = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(metadata.name)
              .setURL(metadata.permalink)
              .setThumbnail(metadata.image_url);
	    	    
	    if(metadata.last_sale)
	    	embedMsg.addField("Last Sold For", `${metadata.last_sale.total_price/(1e18)} \u039E`);
	    
	    embedMsg.addField("Owner", `[${metadata.owner.user?.username || metadata.owner.address.slice(0,8)}](https://opensea.io/${metadata.owner.address})`, true);
	    embedMsg.addField("Rarity", `[Rarity.tools](https://rarity.tools/pixls-official/view/${args[0]}) | [PixlTools](https://pixls.nft-tools.xyz/pixl/${args[0]})`, true);
	    
	    embedMsg.addField("", "_________________________________");
	    let first = false;
            metadata.traits.forEach(function(trait){
	      if(trait.trait_type.toLowerCase() != "birthday") {
                 embedMsg.addField(trait.trait_type, `${trait.value} (${Number(trait.trait_count/metadata.collection.stats.count).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})})`, first)
		      
	     	 first = true;
	      }	    
            });
	    
            message.channel.send(embedMsg);
        })
        .catch(error => message.channel.send(error.message));
	},
};
