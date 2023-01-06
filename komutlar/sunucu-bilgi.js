const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yok", "Düşük hesapta e-posta doğrulanmış olmalıdır", "Orta - Discord'a 5 dakikadan daha uzun süre kayıtlı olmalıdır", "Yüksek - (╯ ° □ °） ╯︵ ┻━┻ - sunucunun üyesi 10 dakikadan uzun olmalıdır", "Çok Yüksek - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - doğrulanmış bir telefon numarasına sahip olmalıdır"];
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "US East :flag_us:",
			"us-south": "US South :flag_us:",
			"us-west": "US West :flag_us:",
			"eu-west": "EU West :flag_eu:",
			"eu-central": "Europe :flag_eu:",
			"singapore": "Singapore :flag_sg:",
			"london": "London :flag_gb:",
			"japan": "Japan :flag_jp:",
			"russia": "Russia :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brazil :flag_br:",
			"singapore": "Singapore :flag_sg:",
			"sydney": "Sydney :flag_au:",
			"southafrica": "South Africa :flag_za:",
    "amsterdam": "Amsterdam :flag_nl:",
				"europe": "Europe :flag_eu:"

	}

	
			const yukleniyor = await msg.channel.send(`Sunucu Bilgileri Araştırılıyor`);

let sunucu = new Discord.MessageEmbed()
.setAuthor('Sunucu Bilgi', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('Sunucu Bilgileri', `Sunucu İsmi: **${guild.name}** \nSunucu ID: **${msg.guild.id}** \nSunucu Sahibi: **${guild.owner}** \nBulunduğu Bölge: **${region[msg.guild.region]}** \nKuruluş Tarihi: **${checkDays(msg.guild.createdAt)}** 
`)
.addField(`Üye Bilgileri `, `Toplam Üye: **${humanCount}** \nToplam Bot: **${botCount}** \nRol Sayısı: **${guild.roles.cache.size}**`)
.addField(`Kanallar`, ` Yazı: **${msg.guild.channels.cache.filter(c => c.type === 'text').size}** \n Sesli: **${msg.guild.channels.cache.filter(c => c.type === 'voice').size}** \n Kategori: **${msg.guild.channels.cache.filter(c => c.type === 'category').size}**`)
.setTimestamp()
.setColor('#D2EE07')
.setFooter('Sunucu Bilgi', msg.guild.iconURL())
        return yukleniyor.edit('', sunucu);

}; 

module.exports.conf = {
aliases: ['sunucubilgi','sb','sunucu', 'si', 'serverinfo', 'server'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'server-info',
    description: 'Learn more server info!',
    usage: 'server-info'
};