const Discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Error, need permission: => ADMINISTRATOR")

    if (!args[0] || !["add", "remove"].includes(args[0])){
    const ce = new Discord.MessageEmbed()
      .setTitle("⛔ PLEASE USE THE COMMAND CORRECTLY!")
      .setColor("RED")
      .addField("To Open On A Specific Channel Only", "`!block-swear add #CHANNEL`")
      .addField("Open for all servers", "`!block-swear add`")
      .addField("To Close On A Specific Channel Only", "`!block-swear remove #CHANNEL`")
      .addField("For close all servers", "`!block-swear remove`")
      message.channel.send(ce)
      message.thread.send(ce)
    }
    if(args[0] === "add"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.set("cd2."+cc.id+message.guild.id, "Kanal")
      message.channel.send("**<#"+cc.id+"> user has been added block swears on the channel!**")
    } else {
      db.set("cd1."+message.guild.id, "Sunucu")
      message.channel.send("**🔓 All servers has been added on block swear!**")
    }
  }
 
   if(args[0] === "remove"){
    const cc = message.mentions.channels.first()
    if(cc){
      db.delete("cd2."+cc.id+message.guild.id)
      message.channel.send("**<#"+cc.id+"> ⛔ user has been removed from block swears!**")
    } else {
      db.delete("cd1."+message.guild.id)
      message.channel.send("**⛔ Block Swear has been removed!**")
    }
  }
};
exports.conf = {
  aliases: ['block-swear', 'küfür-engel', 'block-bad-words', 'küfür-engelleme', 'swear-words', 'küfür-kelimeleri', 'bad-words', 'küfür-kelimeler'],
  permLevel: 0,
  kategori: 'Moderation'  
};

exports.help = {
  name: "block-swear", 
  description: "Block Swears!"
};