// const fetch = require('node-fetch');
// const { openseaCollectionsUrl } = require('../config.json');

// const Discord = require('discord.js');

// module.exports = {
// 	name: process.env.DISCORD_FLOOR_COMMAND || "floor",
// 	execute(message, args) {

//     let url = `${openseaCollectionsUrl}?asset_owner=${process.env.OWNER_ADDRESS}&offset=0&limit=300`;
//     let settings = { 
//       method: "GET",
//       headers: {
//         "X-API-KEY": process.env.OPEN_SEA_API_KEY
//       }
//     };
    
//     fetch(url, settings)
//         .then(res => {
//           if (res.status == 404 || res.status == 400)
//           {
//             throw new Error("Wallet doesn't exist.");
//           }
//           if (res.status != 200)
//           {
//             throw new Error(`Couldn't retrieve: ${res.statusText}`);
//           }
//           return res.json();
//         })
//         .then((metadata) => {
//             // message.channel.send(metadata);
//             processData(message, metadata);
//         })
//         .catch(error => message.channel.send(error.message));
// 	},
// };

// function processData(message, metadata)
// {
//     floorPrice = 0;

//     metadata.every(function(element, index) {
//         element.primary_asset_contracts.every(function(contract, index2) {
//             if (contract.address == "0x082903f4e94c5e10a2b116a4284940a36afaed63")
//             {
//                 floorPrice = element.stats.floor_price;
//                 return false;
//             }

//             return true;
//         })

//         if(floorPrice > 0)
//             return false;
//         else
//             return true;
//     });

//     const embedMsg = new Discord.MessageEmbed()
//           .setTitle(`The current floor price is ${floorPrice}Ξ`);

//     message.channel.send(embedMsg);
// }