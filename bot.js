const express = require("express");
const app = express();

app.listen(3000, () => {

 console.log("Project is running!");
})

app.get("/", (req, res) => {
 res.send("Hello");
})

const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

  // Oynuyor Kısmı
  
      var actvs = [
        `!help`,
        `!help`, 
        `!help`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING'});
    }, 15000);
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

{

  
client.on('message', async message => {
const cdb = require("croxydb") //gerekli modül
if(message.guild){
  const data1 = cdb.get("cd1."+message.guild.id)
  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
 
  if(data1){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq", "gay", "g@y", "bollock", "cındır", "CINDIR", "Cındır", "bambılı", "piss", "0rospu", "or0spu", "0r0spu", "||amk||", "||orospu||", "||0rospu||", "awk", "zort", "siz botsunuz", "SİZ BOTSUNUZ", "SIZ BOTSUNUZ", "Siz botsunuz", "Siz Botsunuz", "ass", "ASS", "Ass", "@ss", "aSs", "Oğraş", "OĞRAŞ", "oğraş", "@mk", "o.ç", "O.Ç", "O.ç", "0ğraş", "z0rt", "Z0rt", "Z0RT", "nigger", "Nigger", "NIGGER", "NİGGER", "nigg", "Nigg", "NIGG", "NİGG", "n!gg", "N!gg", "N!GG", "ass", "ASS", "Ass", "dick", "d!ck", "shit", "sh!t", "sh1t", "d1ck", "cock", "c0ck", "s1k", "s!k", "💩", "bok", "b0k", "poop", "p00p", "po0p", "p0op", "🤬", "bitch", "b1tch", "b!tch", "btch", ":face_with_symbols_over_mouth:", "face_with_symbols_over_mouth:", "face_with_symbols_over_mouth", ":face_with_symbols_over_mouth:*", "face_with_symbols_over_mouth:*", "face_with_symbols_over_mouth*", "MTAwMjIwMDI4MDYzNDQ5OTA4Mg.GiR2vx.Of_F3JcAZUCU3dDM_IfYH4AI6_YBAJ9-KLLDAI", "@mk", "@.m.k", "@ m k", "discord.gg/os", "https://discord.gg/os", "http://discord.gg/os", "urumutreis", "https://discord.com/invite/os", "discord.com/invite/os", "http://discord.com/invite/os"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 100});
  message.reply("**⛔ Swear is not allowed!**")
  }
  }
  })
  }

    if(!data1 && data2){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq", "gay", "g@y", "bollock", "cındır", "CINDIR", "Cındır", "bambılı", "piss", "0rospu", "or0spu", "0r0spu", "||amk||", "||orospu||", "||0rospu||", "awk", "zort", "siz botsunuz", "SİZ BOTSUNUZ", "SIZ BOTSUNUZ", "Siz botsunuz", "Siz Botsunuz", "ass", "ASS", "Ass", "@ss", "aSs", "Oğraş", "OĞRAŞ", "oğraş", "@mk", "o.ç", "O.Ç", "O.ç", "0ğraş", "z0rt", "Z0rt", "Z0RT", "nigger", "Nigger", "NIGGER", "NİGGER", "nigg", "Nigg", "NIGG", "NİGG", "n!gg", "N!gg", "N!GG", "ass", "ASS", "Ass", "dick", "d!ck", "shit", "sh!t", "sh1t", "d1ck", "cock", "c0ck", "s1k", "s!k", "💩", "bok", "b0k", "poop", "p00p", "po0p", "p0op", "🤬", "bitch", "b1tch", "b!tch", "btch", ":face_with_symbols_over_mouth:", "face_with_symbols_over_mouth:", "face_with_symbols_over_mouth", ":face_with_symbols_over_mouth:*", "face_with_symbols_over_mouth:*", "face_with_symbols_over_mouth*", "MTAwMjIwMDI4MDYzNDQ5OTA4Mg.GiR2vx.Of_F3JcAZUCU3dDM_IfYH4AI6_YBAJ9-KLLDAI", "@mk", "@.m.k", "@ m k", "discord.gg/os", "https://discord.gg/os", "http://discord.gg/os", "urumutreis", "https://discord.com/invite/os", "discord.com/invite/os", "http://discord.com/invite/os"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 100});
  message.reply("**⛔ Swear is not allowed!**")
  }
  }
  })
  }
 
}
  });
client.login(process.env.token);
};
