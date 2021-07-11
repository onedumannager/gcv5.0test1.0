
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('filters');
const pko = "mk pko"
const pkk = "pkk2"
if (Config.WORKTYPE == 'private') {

    
Asena.addCMD({on: 'text', fromMe: false }, (async (message, match) => {

        if (!!message.mention && message.mention[0] == '94702102324@s.whatsapp.net') {
await message.client.sendMessage(message.jid,pkk)
        }
const array = ['name']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid,pko )
}
});
}));
}
