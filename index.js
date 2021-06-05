//per far avviare il bot
const Discord = require('discord.js')
const client = new Discord.Client();
//per far avviare il bot
client.login("IL TUO TOKEN")
//per mettere uno stato al bot quello che vuoi
client.once('ready', () => {
    console.log('Il Bot è Pronto Per Essere Usato!')
    bot.user.setActivity('METTI UNO STATO PER IL BOT', { type: 'PLAYING'})
});
//per un comando
client.on("message", (message) => {
    if (message.content == "METTI UN NOME DI UN COMANDO") {
        message.channel.send("METTI LA RISPOSTA CHE IL BOT DEVE MANDARE")
    }
});
//per il comando time
client.on('message', (message) =>{
    if (message.content == ".Time"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send(' :alarm_clock: Sono Le ' + ' ' + ora + ':' + minuto);
    }
});
