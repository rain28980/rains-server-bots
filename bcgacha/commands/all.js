exports.run = (client, message, args) => {
const bclotto = require("../bclotto.js")
    message.channel.send(bclotto.soup())
}
