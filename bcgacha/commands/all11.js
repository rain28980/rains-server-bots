exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")

const a = [bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup()]
    for(i = 0; i < a.length; i++){
  const b[i] = a[i].replace(/\*|_| |-/gi, "").concant("57829")
}
    message.channel.send({embed: {
    description: `${a[1]} ${b[1]}`,
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
