const config = require("../config.js");
const functions = require("../functions.js");

module.exports = {
  name: "ready", // イベント名

async execute(client) {
  client.user.setPresence({ activities: [{name: `${client.guilds.cache.size}servers`,type: "WATCHING"}], status: `online` });

  client.channels.cache.get(config.logch.ready).send("`Botにログインしました！`");

    console.log(`[${functions.timeToJST(Date.now(), true)}] Logged in as 
  ${client.user.tag}!`);
 }
}
