/*
*/

const Asena = require('../events');
const {MessageType } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('ban');


Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
const array = ['name entha','pakaya']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid,lang.a, MessageType.text)
}

});

}));


