const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = 'message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    if(cmd == 'links') {
        let embed = new Discord.MessageEmbed()
        .setTitle('Hey, there! We have numerous connections for Silver-Studios! Here they are below. :grin:')
        .setTimestamp()
        .setDescription(`:video_game: __Roblox:__ <https://web.roblox.com/groups/5068592/Silver-Studios>\n:bird: __Twitter:__ <https://twitter.com/silverstudios9>\n:red_circle: __YouTube:__ <https://www.youtube.com/channel/UC9jauBokYcaxt5EjTUXPJOA>\n:desktop: __Website:__ <https://silver-studios.xyz>\n:moneybag: __Patreon:__ <https://patreon.com/SilverStudios>\n:e_mail: __Discord Invite:__ <https://dsc.gg/Silver-Studios>\n\n*Feel free to go to our website if you want to buy our merch or any benefits for Discord or our games. People who wish to formally contact us or submit an application are also urged to visit our website.*\n------------------------------------------`)
        .setColor('BLUE')
        message.channel.send(`<@${message.author.id}>`)
        message.channel.send(embed);
    }
}

module.exports.config = {
    name: "links",
    description: "Show links",
    usage: ">links",
    accessableby: "Members",
    aliases: []
}