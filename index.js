//Bot Code
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log('Bot Online');
});


//Custom Commands

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd == 'links') {
        message.channel.send(`***Hey, there, <@${message.author.id}>! We have numerous connections for Silver-Studios! Consider giving us a follow on our social media, or donate to us.*** :grin:\n\n:video_game: __Roblox:__ <https://web.roblox.com/groups/5068592/Silver-Studios>\n:bird: __Twitter:__ <https://twitter.com/silverstudios9>\n:red_circle: __YouTube:__ <https://www.youtube.com/channel/UC9jauBokYcaxt5EjTUXPJOA>\n:desktop: __Website:__ <https://silver-studios.xyz>\n:moneybag: __Patreon:__ <https://patreon.com/SilverStudios>\n:e_mail: __Discord Invite:__ <https://dsc.gg/Silver-Studios>\n\n*Feel free to go to our website if you want to buy our merch or any benefits for Discord or our games. People who wish to formally contact us or submit an application are also urged to visit our website.*\n------------------------------------------`);
    }
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd == 'admin') {
        message.channel.send(`Working...`);
    }
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd == 'cmds') {
        message.channel.send(`Placeholder`);
    }
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(!message.content.startsWith(prefix)) return;
    if(cmd == 'staff') {
        message.channel.send(`Placeholder`);
    }
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    let roles = '724391331132342353'
    if(!message.content.startsWith(prefix)) return;
    if(cmd == 'roles') {
        message.channel.send(`***Hey, there, <@${message.author.id}>. We have many roles for you to apply for, earn, and even give yourself! See a list of each role and what they do below :point_down:***\n\n*Staff Roles*\n-\n&Special: __You are a friend of the Owner__\n@Staff: __Role given to all staff, including developers__\n@Chat Moderator: __You moderate the discord and other group chats we have__\n@Admin: __You moderate the games and are supervisors in the Discord__\n@Developer: __You help program our games, website, or Discord bot__\n@Bot: __You help automatically manage the server alongside our team of staff__ [Unobtainable]\n\n*Special Roles*\n-\n@Contributer: __You have donated once or more in the past__\n@VIP: __You have bought this role from our website__\n@Donator: __You have the standard plan in our Patreon__\n@Amazing Donator: __You have the premium plan in our Patreon__\n\n*Main Roles*\n-\n@Beta-Tester: __You help test our game, website, or Discord bot.__\n@Content Creator: __You have partnered with us as a Content Creator__\n@Partner: __You have partnered your own group with us__\n@Member: __You are a verified member of Silver-Studios__\n@Notifications: __You have signed up to get pinged for announcements__\n\n*Device Roles*\n-\n@Console: __You mainly play on a gaming console__\n@Mobile: __You mainly play on a mobile device__\n@Computer: __You mainly play on a desktop or laptop__\n\n*Region Roles*\n-\n@US: __You live in the US__\n@Europe: __You live in Europe__\n@Oceania: __You live in an Oceania region__\n@South America: __You live in South America__\n@Canada: __You live in Canada__\n@Asia: __You live in Asia__\n\n:clipboard: **To apply for a role, please visit our website and fill out an application or go to <#${roles}>. Thanks!**`);
    }
})


//Welcome Messaging

bot.on('guildMemberAdd', (member) => {
    let channelID = '734788902480510997';
    let rules = '724391349192884224';
    let verify = '806269409702182953';
    let roles = '724391331132342353';
    let embed = new Discord.MessageEmbed()
    .setTitle(`Welcome to Silver-Studios! :wave:`)
    .setDescription(`We are glad to have you here! Please head to <#${rules}> first and catch yourself up on how we do things around here. Never takes long and it makes sure you don't get in trouble in the future. Then, visit <#${verify}> and follow the instructions there so you can talk in our server. Finally, just head to <#${roles}> and assign yourself whatever you want.`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter('Thats it! Have fun!')
    .setThumbnail(`https://i.postimg.cc/66GfDvFQ/Png.png`)
    bot.channels.cache.get(channelID).send(`<@${member.id}>`)
    bot.channels.cache.get(channelID).send(embed)
})


//Reaction Roles

bot.on("message", async message => {
    if(message.channel.type !== 'text') return;
    if(message.author.id !== '594371388228239370') return;
    let channelID = '724391331132342353';
    let prefix = '>';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)
    if(cmd == 'reactions') {
        let embed = new Discord.MessageEmbed()
        .setTitle('Reaction Roles')
        .setDescription('React to gain role')
        .setColor("BLUE")
        bot.channels.cache.get(channelID).send(embed).then(sentEmbed => {
            sentEmbed.react('🌐')
        })
        
    }

})


bot.login(process.env.token)













