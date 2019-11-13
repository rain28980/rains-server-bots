exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")
//convert name to emoji
const x = bclotto.soup()
const y = x.replace(/\*|_/gi, "").replace(/ /gi, "_")
const z = client.emojis.find(emoji => emoji.name === y)
//send embed
    message.channel.send({embed: {
    description: `${z} ${x}`,
    color: 0x505050,
    thumbnail: {
      url: "https://cdn.discordapp.com/avatars/481973540317560832/1c20333f6e35bf6b84b1f2cef7b44b53.png"
    },
    author: {
      name: "Battle Cats Gacha",
      url: "https://top.gg/bot/481973540317560832"
    }
  }});
}
