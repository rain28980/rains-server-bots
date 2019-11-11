exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")
    message.channel.send({embed: {
    description: `${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()} \n ${bclotto.soup()}`,
    color: 0x00ffff,
    thumbnail: {
      url: "https://cdn.discordapp.com/avatars/481973540317560832/1c20333f6e35bf6b84b1f2cef7b44b53.png"
    },
    author: {
      name: "Battle Cats Gacha",
      url: "https://top.gg/bot/481973540317560832"
    }
  }});
}
