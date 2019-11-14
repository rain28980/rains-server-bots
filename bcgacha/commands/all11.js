exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")

const x = [bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup()];
const y = ["a"];
const z = ["b"];
for(i = 0; i < x.length; i++){
  y[i] = x[i].replace(/\*|_| |-/gi, "").concat("LZvJUhISQ9");
z[i] = client.emojis.find(emoji => emoji.name === y[i])
}
    message.channel.send({embed: {
    description: `${x[1]} ${z[1]} \n ${x[2]} ${z[2]} \n ${x[3]} ${z[3]} \n ${x[4]} ${z[4]} \n ${x[5]} ${z[5]} \n ${x[6]} ${z[6]} \n ${x[7]} ${z[7]} \n ${x[8]} ${z[8]} \n ${x[9]} ${z[9]} \n ${x[10]} ${z[10]} \n ${x[11]} ${z[11]}`,
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
