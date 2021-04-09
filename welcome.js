module.exports = client => {
    const channelId = '810408635212890122' 

    client.on('guildMemberAdd', member => {
        console.log(member)

        const message = `Ο <@${member.id}> μπήκε , στον **Toxic Roleplay V2 Soon**!!`
        member.roles.add('810408567043653682')

        const channel = member.guild.channels.cache.get(channelId)
        
        channel.send(message)
    })
}
