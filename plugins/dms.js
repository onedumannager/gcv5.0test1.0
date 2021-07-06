//this module from lasiya

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const XTroid = require('../events');
const Config = require('../config');
const UNQ = "wrong command  use on or off with command"
const DDO = "turn on disappering mode"
const ONO = "Sucsessfuly Turned on"
const ONOF = "Sucsessfuly Turned off"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

XTroid.addCommand({pattern: 'dem ?(.*)', fromMe: true, desc: DDO}, (async (message, match) => { 
    if (match[1] == 'on') {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);


            await message.client.toggleDisappearingMessages(message.jid, 604800);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
     
        }

    else if (match[1] == 'off') {
        var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONOF,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
     
        }



}));
