const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";
client.login("");


client.on('message', message => {
  if(message.content.startsWith(prefix + 'طلب')) { 
    const args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send(`اكتب طلبك`)
    const c = message.guild.channels.cache.find(ch => ch.id === '826156965959827556');
   c.send('@here')
    const embed = new Discord .MessageEmbed()
    .setTitle('طلب جديد'). setColor('RANDOM'). setDescription(`${args}`).addField('Request By', `<@!${message.author.id}>`,true).setTimestamp().setFooter(`${message.author.username}`, message.author.displayAvatarURL())
    c.send(embed)
  }
})
//By Keevo 
//Km Codes