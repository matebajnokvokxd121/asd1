const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./config.json");
const client = new Discord.Client({disableEveryone: true});
const superagent = require('superagent');
const randomPuppy = require('random-puppy');
var weather = require('weather-js');


const { Player } = require("discord-player");
const { MessageButton } = require("discord-buttons");
const disbut = require("discord-buttons");

const player = new Player(client);
client.player = player;


const fs = require("fs");
const ms = require("ms");
const { error } = require("console");
const { attachCookies } = require("superagent");


//////////////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client)
});

client.on("message", async message => {
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command)
    command.run(client, message, args);
});

//////////////////////////////////////////////////////////////////////////////////////




let botname = "Invite Reward"

client.on("ready", async() => {
    console.log(`${client.user.username} elindult!`)

    let státuszok = [
        "Invite Rewards discord szerver"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        client.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})

client.on("message", async message =>{ 
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;







    if(cmd === `${prefix}javaslat`){
        message.delete()
            if(message.guild.member(client.user).hasPermission("ADMINSTRATOR")){

        if(args[0]){
            let he_embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag)
            .setTitle("Javaslata")
            .setColor("YELLOW")
            .setTimestamp(message.createdAt)
            .setDescription(args.join(" "))
            .setFooter(message.author.username)

                message.channel.send(he_embed).then(async msg =>{
                    await msg.react("✅")
                    await msg.react("❌")
                })

            } else message.reply("A botnak nincsen Adminisztrációs joga")

        } else {
            message.reply("Kérlek adj meg egy javaslatott")
        }
    }




  

    















    if(cmd === `${prefix}createrole`){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){
            if(message.member.hasPermission("MANAGE_ROLES")){
                if(args[0]){
                    message.guild.roles.create
                }
            }
        }}







    
    






  






   









})


client.login(tokenfile.token);

