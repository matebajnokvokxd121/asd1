const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

let botname = "Teszt bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "Prefix: !",
        "Készítő:a",
        "menő :D"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(cmd === `${prefix}hello`){
        message.channel.send("Szia");
    }


    if(cmd === `${prefix}teszt`){
        let TesztEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Teszt Embed!")
        .addField("Irodalom:", "Líra\n Epika\n dráma")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(TesztEmbed)
    }

    if(cmd === `${prefix}szöveg`){
        let szöveg = args.join(" ");

        if(szöveg) {
            let dumaEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .addField("Szöveg:", szöveg)
        .setFooter(`${botname} | ${message.createdAt}`)
    
        message.channel.send(dumaEmbed)
        } else {
            message.reply("írj szöveget!")
        }
    }
    message.channel.bulkDelete(1);

    let role1 = "1005071146728833114";

    const emoji1 = `✅`;
    const channel = "997546379578720308"

    let roleEmbed = new Discord.MessageEmbed()
    .setAuthor("Fehérlista")
    .setColor("YELLOW")
    .setDescription("Ezennel ﻿az 🎁 | Invite Rewards szabályzatát elfogadom, s vállalom a szankciókat! (Ha elfogadod több csatornát is láthatsz mellesleg megkapod a tag rangot!) ✅")
    .setTimestamp(message.createdAt)
    .setFooter(message.author.username)

     message.channel.send(roleEmbed).then(async msg => {
        await msg.react("✅");
    
    client.on(`messageReactionAdd`, async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;

        if(reaction.message.channel.id == channel) {
            if(reaction.emoji.name === emoji1) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
            }
        
        }
    });

    client.on(`messageReactionRemove`, async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction-fetch();
        if(user.bot) return;

        if(reaction.message.channel.id == channel) {
            if(reaction.emoji.name === emoji1) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
            }
        }
    });




    

        
        
        
     })

})




bot.login(process.env.BOT_TOKEN);
