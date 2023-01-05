const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You don't have permission for ban members!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`You need to select a user for example:; \`${prefix}ban @Dyno Ads\` `);
  if (user.id === message.author.id) return message.channel.send('You not ban yourself!');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`This user's role is high!`);
    if (!reason) reason = 'no reason.'
    if (!user) return message.channel.send(`I can't find user on ping.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`I can't find user in server.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('I not ban competent');

  message.guild.members.ban(user.id)
  message.channel.send(`<@${user.id}> **User have been banned!** **Reason: \`${reason}\`**`)

};

exports.conf = {
  aliases: ['yasakla', 'ban', 'ban-user'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Ban user in your server.',
  usage: 'ban <@kullanıcı> <sebep>',

};
