const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  try {

    const bicon = client.user.displayAvatarURL();
    const botembed = new Discord.MessageEmbed()
      .setColor(client.warna.kato)
      .setThumbnail(bicon)
      .addField("Name", "AdiiAndre")
      .addField("Birthday", "18 March")
      .addField("Owner", "Itsuki#3879")
      .addField("Language", "Discord.JS with NodeJS")
      .addField("Thanks To", "Adii")
      .addField("Instagram", "adiistah")
      .setFooter("Stable Release | Itsuki#3879")
      .setAuthor(message.guild.name, message.guild.iconURL())
    message.channel.send(botembed);
  } catch (error) {
    return message.channel.send(`Something went wrong: ${error.message}`);
    // Restart the bot as usual.
  }
}

exports.conf = {
  aliases: ["adii"],
  cooldown: 5
}

exports.help = {
  name: 'about',
  description: 'melihat tentang Itsuki-Bot',
  usage: 'k!about',
  example: 'k!about'
}
