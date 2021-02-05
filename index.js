//Bot Code
const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});


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
    if(cmd == 'C2MvqDeO4i') {
        message.channel.send(`***We have many roles for you to apply for, earn, and even give yourself! See a list of each role and what they do below :point_down:***\n\n*Staff Roles*\n-\n<@&727595225123651625>: __You are a friend of the Owner__\n<@&806731297640808448>: __Role given to all staff, including developers__\n<@&805675536130113547>: __You moderate the discord and other group chats we have__\n<@&631316263066664961>: __You moderate the games and are supervisors in the Discord__\n<@&631323272927248384>: __You help program our games, website, or Discord bot__\n\n*Special Roles*\n-\n<@&723353782502817892>: __You have donated once or more in the past__\n<@&631323854593196058>: __You have bought this role from our website__\n<@&723353663770329233>: __You have the standard plan in our Patreon__\n<@&723356769878802494>: __You have the premium plan in our Patreon__\n\n*Main Roles*\n-\n<@&631317435651325962>: __You help test our game, website, or Discord bot.__\n<@&631323469937770506>: __You have partnered with us as a Content Creator__\n<@&650854575364112405>: __You have partnered your own group with us__\n<@&707647379335020554>: __You are a verified member of Silver-Studios__\n<@&646420979370688512>: __You have won a giveaway before__\n<@&727590400046661694>: __You have signed up to get pinged for announcements__\n<@&733815838859329567>: __You are not verified__`);
        message.channel.send(`*Device Roles*\n-\n<@&631543640686067732>: __You mainly play on a gaming console__\n<@&631543559555645452>: __You mainly play on a mobile device__\n<@&631543445650931742>: __You mainly play on a desktop or laptop__\n\n*Region Roles*\n-\n<@&707954981348573259>: __You live in the US__\n<@&707955171640082432>: __You live in Europe__\n<@&707955415006183525>: __You live in an Oceania region__\n<@&707955552323633162>: __You live in South America__\n<@&707955059551371324>: __You live in Canada__\n<@&707955305908142116>: __You live in Asia__\n<@&707955454914986054>: __You live in Africa__\n<@&707955123174899806>: __You live in Mexico__\n\n:clipboard: **To apply for a role, please visit our website and fill out an application. Next, scroll down and give YOURSELF the relevant roles. Thanks, <@everyone>!**`);
    }
})


//Welcome Messaging

bot.on('guildMemberAdd', async (member, guild) => {
    let channelID = '734788902480510997';
    let rules = '724391349192884224';
    let verify = '806269409702182953';
    let roles = '724391331132342353';
    let embed = new Discord.MessageEmbed()
    .setTitle(`Welcome to Silver-Studios! :wave:`)
    .setDescription(`We are glad to have you here! Please head to <#${rules}> first and catch yourself up on how we do things around here. Never takes long and it makes sure you don't get in trouble in the future. Then, visit <#${verify}> and follow the instructions there so you can talk in our server. Finally, just head to <#${roles}> and assign yourself whatever you want.`)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`Thats it! Have fun! | User #${member.guild.memberCount}`)
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
    if(cmd == 'reactionsetup1') {
        let embed = new Discord.MessageEmbed()
        .setTitle('Notifications Role')
        .setDescription('React with 🔔 to gain the Notifications role if you would like to get pinged for announcements and updates.')
        .setColor("RED")
        bot.channels.cache.get(channelID).send(embed).then(sentEmbed => {
            sentEmbed.react('🔔')
        })
        
    }
    if(cmd == 'reactionsetup2') {
        let embed = new Discord.MessageEmbed()
        .setTitle('Device Roles')
        .setDescription('React with 🖥️, 📱, 🎮 to gain the respective device roles to show what you are mainly on!')
        .setColor("BLUE")
        bot.channels.cache.get(channelID).send(embed).then(sentEmbed => {
            sentEmbed.react('🖥️')
            sentEmbed.react('📱')
            sentEmbed.react('🎮')
        })
        
    }

})

bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === '724391331132342353') {
        if (reaction.emoji.name === '🔔') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('727590400046661694')
        }
    }
})

bot.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === '724391331132342353') {
        if (reaction.emoji.name === '🔔') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('727590400046661694')
        }
    }
})


//Custom Status

bot.on("ready", () => {
    bot.user.setActivity('Under Construction', {type: 'STREAMING', url: 'https://www.twitch.tv/asilverstorm880'})
})


 bot.login(process.env.token)






