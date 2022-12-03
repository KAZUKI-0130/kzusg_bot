const Discord = require("discord.js");
const config = require("../config.js");
const functions = require("../functions.js");

//サーバー退室
module.exports = {
  name: "guildDelete",
  async execute(guild, client) {
    client.user.setActivity({name: `${client.guilds.cache.size}servers`,type: "WATCHING"});
  const delEmbed = new Discord.MessageEmbed()
    .setTitle("Bot_Leave")
    .setDescription(`NAME : ${guild.name}` + "\n" + `ID : ${guild.id}` + "\n" + `URL : __未作成__`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor(config.color)
    .setTimestamp();
  client.channels.fetch(config.logch.bot_join).then(c => c.send({embeds: 
  [delEmbed]}));
 }
}
