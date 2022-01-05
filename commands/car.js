const fetch = require('node-fetch');
const { openseaMetadataUrl } = require('../config.json');

const Discord = require('discord.js');

module.exports = {
	name: "car",
	execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a car id, ${message.author}!`);
    }

    if (isNaN(parseInt(args[0]))) {
      return message.channel.send(`Car id must be a number!`);
    }

    let url = `${openseaMetadataUrl}/${process.env.CAR_CONTRACT_ADDRESS}/${args[0]}`;
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
	    	embedMsg.addField("Last Sold For", `${metadata.last_sale.total_price/(1e18)} \u039E`, true);
	    
	    embedMsg.addField("Owner", `[${metadata.owner.user?.username || metadata.owner.address.slice(0,8)}](https://opensea.io/${metadata.owner.address})`, true);
	    embedMsg.addField("Rarity", `[Pixlton Car Club Tools](https://pixlton-cars.nft-tools.xyz/car/${args[0]})`, true);
	    
            metadata.traits.forEach(function(trait){
                 embedMsg.addField(trait.trait_type, `${trait.value} (${Number(trait.trait_count/metadata.collection.stats.count).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})})`, true)
            });
	    
            message.channel.send(embedMsg);
        })
        .catch(error => message.channel.send(error.message));
	},
};
