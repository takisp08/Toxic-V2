const Discord = require('discord.js')
const client  = new Discord.Client()
Discord.Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;

const config = require('./config.json')
const command = require('./command')
const welcome = require('./welcome')
const leave = require('./leave')
const poll = require('./poll');
const {MessageEmbed} = require('discord.js')
const fetch = require('node-fetch')
const request = require('request');
const moment = require('moment');
const guildInvites = new Map();
const FiveM = require('fivem')
const staffids = '498118948370382848' 
const jointocreate = require('./jointocreate')
const jointocreate2 = require('./jointocreate2')
const onduty = "810408600010227723" 
const svr = new FiveM.Server(`${config.ip}:${config.port}`);
prefix =  '!'




client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {
  client.guilds.cache.forEach(guild => {
    guild.fetchInvites()
        .then(invites => guildInvites.set(guild.id, invites))
        .catch(err => console.log(err));
          client.user.setActivity("Toxic Roleplay V2")
   
          client.api.applications(client.user.id).guilds('810407986132156436').commands.post({
            data: {
                name: "developers",
                description: "Για να δείτε ποιοι είναι οι developers του Toxic Roleplay V2."
            }
        });
  
  
  client.ws.on('INTERACTION_CREATE', async interaction => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;

    
    if(command == 'developers') {
      const developers = new Discord.MessageEmbed()
      .setColor('#07fa3e')
      .setDescription("" 
      + 
      `
      <@811234169949913090> <@&810408557223739472> 

      <@498118948370382848> <@&810408559191654461> 

      <@804659268145250325>  <@&810408557223739472>

      <@805104218691731496> <@&810408557223739472>

      <@786366234341802048> <@&810408557223739472>

      <@117001138007572484> <@&810408557223739472>

     

      `)
      client.api.interactions(interaction.id, interaction.token).callback.post({
          data: {
              type: 4,
              data: await createAPIMessage(interaction, developers)
          }
      });
  }
});


async function createAPIMessage(interaction, content) {
const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles();

return { ...apiMessage.data, files: apiMessage.files };
}

  client.on("message", async message => {
    if(message.author.bot) return;
    if(!onduty.includes(message.channel.id)){
  if(!staffids.includes(message.author.id) && message.content === '!onduty'){
  message.delete()
      }else if(staffids.includes(message.author.id)){
        if(message.content == '!onduty'){
          message.delete()
      
          const onduty = new Discord.MessageEmbed()
         .setColor('#4dff00')
         .setDescription(`O ${message.author} μπήκε on duty στις:`)
        .setFooter(message.createdAt)
        
          message.channel.send(onduty);
         message.member.roles.add('829801234155962436')
          
      
    
        }
      }
    }
   else if(onduty.includes(message.channel.id)){
      if(message.content == '!onduty'){
        message.delete()
    
        const onduty = new Discord.MessageEmbed()
        .setColor('#4dff00')
        .setDescription(`O ${message.author} μπήκε on duty στις:`)
        .setFooter(message.createdAt)
       
         message.channel.send(onduty);
         message.member.roles.add('829801234155962436')
      }
  }
  })
 
})
client.on("message", async message => {
  if(message.author.bot) return;
  if(!onduty.includes(message.channel.id)){
if(!staffids.includes(message.author.id) && message.content === '!onduty'){
message.delete()
    }else if(staffids.includes(message.author.id)){
      if(message.content == '!offduty'){
      message.delete()
    
        const onduty = new Discord.MessageEmbed()
       .setColor('#ff0000')
       .setDescription(`O ${message.author} μπήκε on duty στις:`)
      .setFooter(message.createdAt)
      
        message.channel.send(onduty);
       message.member.roles.remove('829801234155962436')
        
   
  
      }
    }
  }
 else if(onduty.includes(message.channel.id)){
    if(message.content == '!offduty'){
      message.delete()
  
      const onduty = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setDescription(`O ${message.author} μπήκε on duty στις:`)
      .setFooter(message.createdAt)
     
       message.channel.send(onduty);
       message.member.roles.remove('829801234155962436')
    }
}
})


command(client, 'support', message => {
  message.channel.send(`**<@&810408566313844746>  ο/η  ${message.author} χρειάζετε βοήθεια εξυπηρετήστε τον/την το συντομότερο δυνατό!**`)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.channelID;
  if (newUserChannel === "810408592335044618")
  {
    const supportlogs = new Discord.MessageEmbed()
    .setColor('#07fa3e')
    .setDescription(`**O <@${newMember.id}> μπήκε στο** \`📞┋𝐖𝐚𝐢𝐭𝐢𝐧𝐠 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭\`**!**`)   
    .setTimestamp()
      client.channels.cache.get("829803520764936273").send("<@&810408566313844746> ", supportlogs)
  }

});
command(client, 'donate', message => {
  message.channel.send(`**<@&810408555340890142> ο/η  ${message.author} θέλει να κάνει donate εξυπηρετήστε τον/την το συντομότερο δυνατό!**`)
})
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.channelID;
  if (newUserChannel === "810408602568491018")
  {
    const supportlogs = new Discord.MessageEmbed()
    .setDescription(`**O <@${newMember.id}> μπήκε στο** \`💸 Waiting For Donate\`**!**`)   
    .setColor('#07fa3e')
    .setTimestamp()
      client.channels.cache.get("829805353167618108").send("<@&810408555340890142>", supportlogs)
  }
});

command(client, 'app',  (message) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`**[<@&821450388317536316>](https://docs.google.com/forms/d/1ejD8WeBxarG7a5o9MQg_xrKFoleKpKyosE6Tp0D2_IY/edit)**`)
.setColor('#0a0a0a')

  message.channel.send(embed)
})
command(client, 'app',  (message) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`**[<@&821450421364850769>](https://docs.google.com/forms/d/1j5n-wEakqv4L5AQeAQgMusXtD4yRWQGkrSwue-yLTIw/edit)**`)
.setColor('#0098ff')

  message.channel.send(embed)
})
command(client, 'app',  (message) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`**[<@&821450436548493343>](https://docs.google.com/forms/d/1hhOnOUddWWSyeHoccylHsjK3bU8FbFvQy3u6pZGuD-o/viewform?edit_requested=true)**`)
.setColor('#04dd53')

  message.channel.send(embed)
})
client.on('message',  message => {
  if(message.channel.id === '810408631732273179'){
  message.react("830032069907447819")
    }
});
client.on('message',  message => {
  if(message.channel.id === '810408631732273179'){
  message.react("830032112757375047")
    }
});
client.on("message", async message =>{
  if (message.author.bot) return;
  if (message.channel.id === '810408626513510400'){
          message.delete();
        const exampleEmbed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.com/users/${message.author.id}`)
          .setColor('#1da1f2')
          .setDescription(message.content)
          .setFooter('Twitter', 'https://cdn.discordapp.com/attachments/771448218537951285/772897362401427456/logo_1.png');
          
          
        message.channel.send(exampleEmbed);
  }
})
client.on("message", async function(message) {
  if (message.channel.id === `810408627256426546`) {
    if (message.author.bot) return;
    if (!message.attachments.first()) {
      let instagramEmbed = new Discord.MessageEmbed()
        .setColor('#d32256')
        .setDescription("" + message.content + "")
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.com/users/${message.author.id}`)
    
        .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/771448218537951285/787649632352075796/1200px-Instagram_logo_2016.svg_1.webp');
      message.channel.send(instagramEmbed)
      message.delete();
      return;
    }

    let img = message.attachments.first();
    let text = request.post(`https://api.imgbb.com/1/upload?key=${config.imgbb_com.imgbb_api_key_upload}`, { form: { image: img.url } }, function(error, resp, body) {
      try {
        JSON.parse(body).data.url
      } catch {
        return;
      }

      let url = JSON.parse(body).data.url;

      if (!message.content) {
        if (message.attachments.first())
          if (message.author.bot) return;
        let instagramEmbed2 = new Discord.MessageEmbed()
          .setColor('#d32256')
          .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.com/users/${message.author.id}`)
         
          .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/771448218537951285/787649632352075796/1200px-Instagram_logo_2016.svg_1.webp')
          .setImage(url)
        message.channel.send(instagramEmbed2)
        message.delete();
        return;

      }
     
      if (message.content && message.attachments.first())
        if (message.author.bot) return;
      let instagramEmbed3 = new Discord.MessageEmbed()
        .setColor('#d32256')
        .setDescription("" + message.content + "")
        .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.com/users/${message.author.id}`)
      
        .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/771448218537951285/787649632352075796/1200px-Instagram_logo_2016.svg_1.webp')
        .setImage(url)
      message.channel.send(instagramEmbed3)
      message.delete();
      return;
    });
  }

})
client.on("message", async message =>{
  if (message.author.bot) return;
  if (message.channel.id === '810408627789627433'){
          message.delete();
        const exampleEmbed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.com/users/${message.author.id}`)
          .setColor('#ffff00')
          .setDescription(message.content)
          .setFooter('Newspaper', 'https://cdn.discordapp.com/attachments/765637357919272990/772902476331614218/newsfdsbot.png');
          
          
        message.channel.send(exampleEmbed);
  }
})
client.on('message', async message => {
  if(message.author.bot) return;

if(message.channel.id === "810408628607647765"){ 
message.channel.send(message.content, message.attachments.first())
message.delete()
}
if(message.channel.id === "810408628607647765"){ 
let channel = message.guild.channels.cache.get("810536090624327681") 
if(!message.attachments.first()){ 
  let embed = new MessageEmbed()
.setDescription(`O ${message.author} έστειλε: ${message.content}`)

channel.send(embed)
}

if(!message.content){
  let channel2 = message.guild.channels.cache.get("810536090624327681") 
  let embed2 = new MessageEmbed()
  .setDescription(`O ${message.author} έστειλε μια εικόνα:`)
  .setImage(message.attachments.first().proxyURL)
  channel2.send(embed2)
}
else if(message.content, message.attachments.first()){
  let channel3 = message.guild.channels.cache.get("810536090624327681") 
  let embed3 = new MessageEmbed()
  .setDescription(`O ${message.author} έστειλε: ${message.author}`)
 .setImage(message.attachments.first().proxyURL)
  channel3.send(embed3)
}
} 
  });





jointocreate(client)
jointocreate2(client)
welcome(client)
leave(client)
})
client.login(config.token)