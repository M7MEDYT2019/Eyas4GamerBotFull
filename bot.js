const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("$$help",{type: 'WATCHING'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
    if (message.author.bot) return;
    var prefix ="$$"
     if (message.content === prefix + "help") {
		 message.channel.send('**تم ارسال رسالة في الخاص**');




 message.author.sendMessage(`
 **

 ╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╭╮╱╭╮╱╱╱╱╭╮
╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱┃┃╱┃┃╱╱╱╭╯╰╮
╭━╮╭━┻╮╭┫╭╮╭┳━━┳━┫┃╭┫╰━┳━┻╮╭╯
┃╭╮┫┃━┫┃╰╯╰╯┃╭╮┃╭┫╰╯┫╭╮┃╭╮┃┃
┃┃┃┃┃━┫╰╮╭╮╭┫╰╯┃┃┃╭╮┫╰╯┃╰╯┃╰╮
╰╯╰┻━━┻━┻╯╰╯╰━━┻╯╰╯╰┻━━┻━━┻━╯
╔[❖════════════❖]╗
             هلا
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             اومر عادية
╚[❖════════════❖]╝

❖ $$bans ➾ لي معرف مين بالع بان

❖ $$coins ➾  لي معرفة الكوين

❖ $$sg ➾ لي البحث في جوجل

❖ $$topinvites  ➾ لي عرض من اكثر في الدعوات

❖ $$report  ➾ للابلاغ عن شخص ما

❖ $$skin ➾ لي عرض سكن ماين كرافت                 

❖ $$count  ➾ لي معرفة عدد الأعضاء في السيرفر

❖ $$embed  ➾ يحط لك الكلام في مربع

❖ $$allbots  ➾ لي اظهار جميع البوتات

❖ $$level ➾ لي معرفه كم ليفلك

❖ $$gif  ➾ لي عرض gif

❖ $$id ➾ لي عرض معلومات عن حسابك

❖ $$avatar ➾ لي عرض صورتك او اي شخص تمنشن

❖ $$emoji ➾ليكي البوت يرسل نفس الاموجي نفس الاموجي الي ارسلته

❖ $$tag  ➾ لي الزغرفة

❖ $$bot  ➾ لي عرض معلومات البوت

❖ $$cal ➾ آلة حاسبة

❖ $$server ➾ عرض معلومات السيرفر

❖ $$invite ➾ لي اضفت البوت الي سيرفرك

❖ $$invites ➾ لي عرض كم دعوة انت جبت

╔[❖════════════❖]╗
            اومر ادمن
╚[❖════════════❖]╝

❖ $$kick <mention > ➾  kickلي اعطاء شخص

❖ $$setvoice  لي انشاء روم فويس اونلاين

❖ $$say  ➾ يكرر الكلام الذي تقولة

❖ $$ban <mention> ➾ لي اعطاء شخص بان

❖ $$unban <mention> ➾ لي فك بان عن شخص

❖ $$clear ➾ لي مسح الشات

❖ $$mute <mention> ➾ لي اعطاء ميوت لي شخص

❖ $$ct <name> ➾ لي انشاء روم كتبي

❖ $$cv <name> ➾لي انشاء روم صوتي

❖ $$bc <message>  ➾ لي ارسال رسالة لي كل الاعضاء

╔[❖════════════❖]   ╗
            اومر العاب
╚[❖════════════❖]╝

❖ $$rps ➾ لعبة حجرة ورقة مقص

❖ $$marry ➾ لعبة التزوج

❖ $$لعبة لوخيروك ➾ لوخيروك

==================================================================

Server support: https://discordgg/fxNGHR 

==================================================================

bot invite link: https://discordappcom/api/oauth2/authorize?client_id=472224983943217175&permissions=2146958583&scope=bot 

==================================================================
**
`);

    }
});


client.on("ready", () => {
let channel =     client.channels.get("460053229217251330")
    setInterval(function() {
channel.send(`**تفعلو يا شباب.**`);
}, 7200000)
})





client.on('message', msg => {
if(msg.content === 'هلا')
msg.reply('هلا حبي')
});


client.on('message', msg => {
if(msg.content === 'السلام عليكم')
msg.reply('وعليكم السلام ورحمة الله وبركاته')
});
    
client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('$$bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Network_Shop";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '$$'; //تقدر تغير البرفكس

    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab")
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

   client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "$$";
                if(message.content.startsWith(prefix + 'allbots')) {


    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


   client.on('message', message => {
var prefix = "$$";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});




   client.on('message', message => {
       var prefix = "$$";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});




client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});



   client.on('message' , message => {
var prefix = "$$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("ايدي حسابك عشان توصلك الرسائل").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Rosé // SaifDz")


message.channel.send(embed);


}

});


   client.on('message', message => {
    var prefix = "$$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});






client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$$count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });


client.on('message', message => {
    if (message.content.startsWith("$$bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Morro Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ $$ ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | MHSTR')
    })
}
});





client.on('message', message => {
    var prefix = "$$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    var prefix = "$$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
  }}

   });



   client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })


client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});


	client.on("message", (message) => {
if (message.content.startsWith("$$ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});



client.on("message", (message) => {
if (message.content.startsWith("$$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});


client.on('message', message => {
    if (message.content.startsWith("$$bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});




client.on('message', message => {
   if (message.content === "$$id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});


client.on('message',function(message) {
    let prefix = "$$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`);
}
});




client.on("message", message => {
var prefix = "$$";

            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Network Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }


});



client.on('message', function(msg) {
    const prefix = '$$'
    if(msg.content.startsWith ('$$server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
      .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });







   client.on('message', message => {
       var prefix ="$$"
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});









  const gif = require("gif-search")
client.on('message', message => {
    var prefix ="$$"
    if(message.content.startsWith(prefix + 'gif')) {
console.log('[Gif Search] Developed By Ghost')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('يجب كتابة أسم الصورة')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
}
});


  


client.on('guildMemberRemove', member => {
  if(member.presence.status === 'offline') {
      member.guild.owner.send(`في واحد خرج من سيرفرك وهو مسوي نفسه غامض اوف لاين :eyes: `)
}
});



 



client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
    var prefix ="$$"
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});



client.on('message' , message => {
    var prefix = "$$";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});


client.on('message', message => {
      if(message.content.startsWith ("$$marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
});


 client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});


 
 client.on('message', message => {
     var prefix ="$$"
 if(message.content.startsWith(prefix + "invite")) { 
message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
}
});

 
 client.on("message", message => {
    var prefix = "$$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
 
 
 const google = require('google-it');
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
 var prefix ="$$"
    if(message.content.startsWith(prefix + 'sg')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
 
 
 var prefix = "$$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


client.on('guildCreate', guild => {
  client.channels.get("461429580650119168").send(`**Woops new server ✅
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
});




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
  var prefix = "$$";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('حدد معادلة ، من فضلك.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }

    const embed = new Discord.RichEmbed()
    .addField("**السؤال**: ",`**${question}**`, true)
    .addField("**الناتج**: ",`**${answer}**`, true)
    .setFooter("Network_shop حاسبه")
    msg.channel.send(embed)
    }
};
});

const figlet = require('figlet');
client.on('message', message => {
    var prefix ="$$"
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("``" + data + "``") //  عدل على النقاط وحطهم 3 من الجهتين مثل`` كذا تزيد واحد
           })
}
});




client.on('message', message => {
    var prefix ="$$"
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});



client.on('message',message =>{
    var prefix = "$$";
    if(message.content.startsWith(prefix + 'topinvites')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/avatars/472224983943217175/4fcb0459f7aab6af86d56d97cf7de54b.png?size=2048")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });


  const fs = require("fs");
  client.on('message', async message =>{
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let xp = require("./xp.json");
  
    let xpAdd = Math.floor(Math.random() * 7) + 8;
    console.log(xpAdd);
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
  
  
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor("blue")
      .addField("New Level", curlvl + 1);
  
      message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });
  });

  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '$$';
    let xp = require("./xp.json");
    
if(cmd === `${prefix}level`) {
if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
   };
 }
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 300;
   let difference = nxtLvlXp - curxp;
 
   let lvlEmbed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setColor("blue")
   .addField("Level", curlvl, true)
   .addField("XP", curxp, true)
   .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 
   message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
}
});


client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '$$';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});



const secre = [
    "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
    "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
    "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
    "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
    "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
    "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
    "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
    "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
    "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
    "**لو خيروك بين الحقد أو المسامحة**.",
    "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
    "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
    "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
    "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
    "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
    "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
    "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
    "**لو خيروك بين المال أو الجمال**.",
    "**لو خيروك بين المال أو الذكاء**.",
    "**لو خيروك بين المال أو الصحة**.",
    "**لو خيروك بين الجمال أو الذكاء**.",
    "**لو خيروك بين الذكاء أو الصحة**.",
    "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
  ]
   
   
   client.on('message', message => {
     if (message.content.startsWith("$$لوخيروك")) {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
   
     .setThumbnail(message.author.avatarURL)
   .addField('لعبه لو خيروك' ,
    `${secre[Math.floor(Math.random() * secre.length)]}`)
    message.channel.sendEmbed(embed);
    console.log('[id] Send By: ' + message.author.username)
      }
  });

  
 
  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
});


client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '$$';
    let coins = require("./coins.json");
    
if(cmd === `${prefix}coins`) {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
});



client.login(process.env.BOT_TOKEN);
