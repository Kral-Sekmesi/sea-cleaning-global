const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
    if(args[0] === "general" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.MessageEmbed()
  .setAuthor('Genel', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Links", ` [Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + `[Vote here](https://bit.ly/3nUkUBT)`  , false)
              return message.channel.send(Genel)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Server" || args[0] === "server") {
              let Sunucu = new Discord.MessageEmbed()
  .setAuthor('Sunucu', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Links", ` [Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + `[Vote here](https://bit.ly/3nUkUBT)`  , false)
              return message.channel.send(Sunucu)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Eğlence', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linkler", ` [Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + ` [Vote here](https://bit.ly/3nUkUBT)`  , false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.MessageEmbed()
  .setAuthor('Moderasyon', message.author.displayAvatarURL())
  .setColor('#2667FF')
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Links", ` [Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + ` [Vote here](https://bit.ly/3nUkUBT)`  , false)
   return message.channel.send(Moderasyon)
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
   .setColor('#2667FF')
   .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
         .addField("» Links", `[Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + `[Vote here](https://bit.ly/3nUkUBT)` , false)
    return message.channel.send(Sahip)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Yardım Komutları', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}help Kategori\` \n **Örnek:** \`${prefix}help Genel\``)
  .addField('Kategoriler:', `
  **[${prefix}help General](https://discord.gg/XHr5RttRxv)** 
  **[${prefix}help Fun](https://discord.gg/XHr5RttRxv)**
  **[${prefix}help Moderation](https://discord.gg/XHr5RttRxv)**
  **[${prefix}help Server](https://discord.gg/XHr5RttRxv)**
  `)
  .addField("» Links", `[Invite](https://discord.com/oauth2/authorize?client_id=993184917682921532&permissions=2147483656&scope=bot%20applications.commands)` + "** | **" + `[Support Server](https://discord.gg/XHr5RttRxv)`  + "** | **" + `[Vote here](https://bit.ly/3nUkUBT)`    , false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
//EMİRHAN SARAÇ TARAFINDAN YAPILMIŞTIR 2021 DE YENİLENMİŞTİR!

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "Genel" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'help',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Komutlar hakkında bilgi verir.', //Komutun açıklaması
    usage: 'help', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };
