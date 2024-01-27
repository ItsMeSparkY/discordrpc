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
    .setApplicationId('1067763565601247272')
    .setType('STREAMING')
    .setURL('https://youtu.be/dQw4w9WgXcQ')
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
    .setAssetsSmallImage('')
    .setAssetsSmallText('Legit')
    .addButton('Join', 'https://discord.gg/mlontop')
    .addButton('Us', 'https://discord.gg/mlontop')
     client.user.setActivity(r);
     client.user.setPresence({ status: "dnd" });
})
const mySecret = process.env['TOKEN'];
client.login(mySecret)
