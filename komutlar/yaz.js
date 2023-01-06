const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['say', 'söyle', "write"],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'You can say if you want',
  usage: 'say [yazdırmak istediğiniz şey]'
};
