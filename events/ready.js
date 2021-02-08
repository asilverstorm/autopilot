const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity('Piloting Silver-Studios', {type: 'STREAMING', url: 'https://www.twitch.tv/asilverstorm880'});
}