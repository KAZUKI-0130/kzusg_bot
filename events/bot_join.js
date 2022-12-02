const Discord = require("discord.js");
const config = require("../config.js");
const functions = require("../functions.js");

//サーバー参加
module.exports = {
  name: "guildCreate",
  async execute(guild, client) {
    client.user.setActivity({name: `${client.guilds.cache.size}servers`,type: "WATCHING"});
  const addEmbed = new Discord.MessageEmbed()
    .setTitle("サーバー追加")
    .setDescription(`${guild.name}(${guild.id})にBotが追加されました。`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor(config.color)
    .setTimestamp();
  client.channels.fetch(config.logch.bot_join).then(c => c.send({embeds: 
  [addEmbed]}));
 }
}
