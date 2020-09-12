const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';
const PREFIX = '!';
const {Client, RichEmbed} = require('discord.js');

bot.on('ready', () =>{
    console.log('Bot ON!');
    bot.user.setActivity('Napiš mi !info');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':
                const info = new Discord.MessageEmbed()
                    .setTitle("301 s.r.o")
                    .setColor(0x1E90FF)
                    .addField("Máte zájem o semináře od 301 s.r.o?", value="301 s.r.o je učebna, ve které se učí programování videoher, aplikací a virtuální reality!")
                    .addField('Pokud zájem máte, poprosím vás dát na tuto zprávu reakci, děkuji!', value="Poprosím neodepisovat na tuto anketu či spamovat tento kanál.")
                message.channel.send(info);
            break;
        }
    })
bot.login(token);
