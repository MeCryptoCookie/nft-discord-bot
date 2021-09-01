// const Discord = require('discord.js');
// const axios = require('axios')
// const jsdom = require('jsdom')
// const CacheService = require('../cache')

// const { JSDOM } = jsdom;

// const ttl = 3600; //cache for 3600 seconds;
// const cache = new CacheService(ttl);

// const sleep = async (delay) => await new Promise(r => setTimeout(r, delay))

// const openseaUrl = `https://opensea.io/assets/${process.env.OPEN_SEA_COLLECTION_NAME}?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW`

// // wait before downloading a page from OpenSea - so that we don't get rate limited
// const getOS = async url => {
//   const OS_INTERVAL = 500
//   await sleep(OS_INTERVAL)
//   const res = await axios.get(url, {
//     "headers": { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"},
//   });
//   return res.data
// }

// const fetchFloor = async () => {
//   const osPage = await getOS(openseaUrl)
//   const dom = new JSDOM(osPage)
//   let name = dom.window.document.querySelector('.AssetCardFooter--name').textContent
//   let price = dom.window.document.querySelector('.Price--amount').textContent
//   let url = `https://opensea.io${dom.window.document.querySelector('.Asset--anchor').href}`

//   return {name, price, url}
// }

// module.exports = {
// 	name: "floor",
// 	execute(message) {
//     cache.get("FloorPrice", fetchFloor)
//       .then((data) => {
//         const embedMsg = new Discord.MessageEmbed()
//           .setTitle(`The current floor price is ${data.price.trimEnd()}Ξ`)
//           .setURL(data.url)

//           message.channel.send(embedMsg);
//       })
//       .catch(error => message.channel.send(error.message));
// 	},
// };