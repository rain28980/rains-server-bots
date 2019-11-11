exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 0x00ffff,
    description: "avalable gacha's: \n nekoluga, dynamites, Wargods, galaxy, emperors, souls, heros, almighties, legend, pixies, uberfest, epicfest",
    thumbnail: {
      url: "https://cdn.discordapp.com/avatars/481973540317560832/1c20333f6e35bf6b84b1f2cef7b44b53.png"
    },
    "fields": [
      {
        "name": "how to use",
        "value": "type +roll followed by an uber group \n example +roll nekoluga"
      },
      {
        "name": "additional gacha factors ",
        "value": "add an l before the uber group to add limited edtion super rares \n add a r before the uber group to add reinforcements \n add a g before the uber group to add the Grandon Mining Corps \n add an 11 after the uber group to make it an eleven draw \n example +roll gnekoluga"
      },
      {
        "name": "suggest gachas to add",
        "value": "I plan to add gachas that arent in yet but i might add a custom one if theres enough support behind it"
      }
    ],
    author: {
      name: "Battle Cats Gacha",
      url: "https://top.gg/bot/481973540317560832"
    }
  }});
}
