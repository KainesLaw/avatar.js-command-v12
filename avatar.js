
const Discord = require("discord.js");

module.exports = {
  //everything below is changeable. change everything to your liking
  name: "avatar",
  aliases: ["avatar"],
  description: "Display a user avatar",
  usage: "avatar <@user | user ID>",
  category: "Utility",
  cooldown: 6,
  //dont touch anything below unless you know what you're doing
 run: async (client, message, args) => {
  let user;

if (message.mentions.users.first())
 {
user = message.mentions.users.first();

} else if (args[0]) {

user = message.guild.members.cache.get(args[0]).user;

} else {
user = message. author;
}



let avatar = user.displayAvatarURL ({size: 4096, dynamic: true});

const embed = new Discord.MessageEmbed()

.setTitle(`${user.tag}'s avatar`)
.setDescription(`[Avatar URL of **${user.tag}**](${avatar})`) 
.setColor("RANDOM")
.setImage(avatar);

return message.channel.send(embed);
}
};
