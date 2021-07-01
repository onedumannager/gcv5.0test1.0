/*
*/

const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== undefined ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
     
        if (!!message.mention && message.mention[0] == '94702102324@s.whatsapp.net') {
await message.client.sendMessage(message.jid,"hmm", MessageType.text )
        }
const array = ['pakaya','hukapn','boobs','pussy','organism','wet pussy','Ramos','ponnya']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, ".ban", MessageType.text)
}
});
}
}));
