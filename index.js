const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1197854616566636605')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/sparkyx69')
    .setState('Legit')
  
    .setName('MoonLight')
    .setDetails('Legit')
    .setParty({
        max: 100,
        current: 7,
        id: Discord.getUUID(),
    })
    
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/icons/1187033801914851338/a_f294e752903ea046e2f389712c50f1b2.gif?size=2048')
    .setAssetsLargeText('MoonLight')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1134648732604977253.gif?size=128&quality=lossless')
    .setAssetsSmallText('Legit')
    .addButton('Join', 'https://discord.gg/mlontop')
    .addButton('Us', 'https://discord.gg/mlontop')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" });
})
const mySecret = process.env['TOKEN'];
client.login(mySecret)
