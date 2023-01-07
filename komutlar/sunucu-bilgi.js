const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " day") + " ago";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifyLevels = ["None", "Must have verified e-mail on their discord account", "Medium - Must also be registed on discord longer than 5 minutes", "High - (╯ ° □ °） ╯︵ ┻━┻ - Must also be registed on discord longer than 10 minutes", "Highest - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - Must have verified e-mail on their discord account"];
	let region = {
			"us-central": "American :flag_us:",
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

	
			const yukleniyor = await msg.channel.send(`Loading server information!`);

let sunucu = new Discord.MessageEmbed()
.setAuthor('Server info', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('Server Information', `Server Name: **${guild.name}** \nServer ID: **${msg.guild.id}** \nServer Owner: **${guild.owner}** \nLocation: **${region[msg.guild.region]}** \nCreated history: **${checkDays(msg.guild.createdAt)}** 
`)
.addField(`Member Information `, `Total Members: **${humanCount}** \nTotal Bots: **${botCount}** \nRole Count: **${guild.roles.cache.size}**`)
.addField(`Channel`, ` Text: **${msg.guild.channels.cache.filter(c => c.type === 'text').size}** \n Voice: **${msg.guild.channels.cache.filter(c => c.type === 'voice').size}** \n Category: **${msg.guild.channels.cache.filter(c => c.type === 'category').size}**`)
.setTimestamp()
.setColor('#D2EE07')
.setFooter('Server Information', msg.guild.iconURL())
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