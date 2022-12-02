const Discord = require("discord.js");
const config = require("../config.js");
const functions = require("../functions.js");
const invite = await

//リンク抜き取り


//サーバー参加
module.exports = {
  name: "guildCreate",
  async execute(guild, client) {
    client.user.setActivity({name: `${client.guilds.cache.size}servers`,type: "WATCHING"});
  const addEmbed = new Discord.MessageEmbed()
    .setTitle("Bot_Join")
    .setDescription(`NAME : ${guild.name}`　+ "\n" + `ID : ${guild.id}`)
    .addField("") //リンク出力
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setColor(config.color)
    .setTimestamp();
  client.channels.fetch(config.logch.bot_join).then(c => c.send({embeds: 
  [addEmbed]}));
 }
}
