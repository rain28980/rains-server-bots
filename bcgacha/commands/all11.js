exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")

const x = [bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup(),bclotto.soup()];
const y = ["a"];
for(i = 0; i < x.length; i++){
  y[i] = x[i].replace(/\*|_| |-/gi, "").concat("LZvJUhISQ9");
}
    message.channel.send({embed: {
    description: `${x[1]} ${y[1]} \n ${x[2]} ${y[2]} \n ${x[3]} ${y[3]} \n ${x[4]} ${y[4]} \n ${x[5]} ${y[5]} \n ${x[6]} ${y[6]} \n ${x[7]} ${y[7]} \n ${x[8]} ${y[8]} \n ${x[9]} ${y[9]} \n ${x[10]} ${y[10]} \n ${x[11]} ${y[11]}`,
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
