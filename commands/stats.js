const fetch = require('node-fetch');
const { openseaCollectionsUrl } = require('../config.json');

const Discord = require('discord.js');

module.exports = {
	name: process.env.DISCORD_STATS_COMMAND || "stats",
	execute(message, args) {
    let url = `${openseaCollectionsUrl}?asset_owner=${process.env.OWNER_ADDRESS}&offset=0&limit=300`;
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
            throw new Error("Wallet doesn't exist.");
          }
          if (res.status != 200)
          {
            throw new Error(`Couldn't retrieve: ${res.statusText}`);
          }
          return res.json();
        })
        .then((metadata) => {
            processData(message, metadata);
        })
        .catch(error => message.channel.send(error.message));
	},
};

function processData(message, metadata)
{
      stats = null;
      
      metadata.every(function(element, index) {
          element.primary_asset_contracts.every(function(contract, index2) {
              if (contract.address == process.env.CONTRACT_ADDRESS)
              {
                  stats = element.stats;
                  return false;
              }

              return true;
          })

          if(stats != null)
              return false;
          else
              return true;
      });

      if (stats == null)
      {
        const embedMsg = new Discord.MessageEmbed()
          .setTitle(`Stats couldn't be gathered. Sorry!`);

        message.channel.send(embedMsg);
      }
      else 
      {
        const embedMsg = new Discord.MessageEmbed()
          .setTitle(`📊 Current Pixls Statistics 📊`);

        // embedMsg.addField("Floor", `${stats.floor_price.toFixed(2)}Ξ`, true);
        embedMsg.addField("Total # Sales", `${stats.total_sales}`, true);
        embedMsg.addField("# Owners", `${stats.num_owners}`, false);
    
        embedMsg.addField("1D AVG", `${stats.one_day_average_price.toFixed(2)}Ξ`, true);
        embedMsg.addField("7D AVG", `${stats.seven_day_average_price.toFixed(2)}Ξ`, true);
        embedMsg.addField("30D AVG", `${stats.thirty_day_average_price.toFixed(2)}Ξ`, true);
        embedMsg.addField("1D VOL", `${stats.one_day_volume.toFixed(2)}Ξ`, true);
        embedMsg.addField("7D VOL", `${stats.seven_day_volume.toFixed(2)}Ξ`, true);
        embedMsg.addField("30D VOL", `${stats.thirty_day_volume.toFixed(2)}Ξ`, true);

        message.channel.send(embedMsg);
      }
}