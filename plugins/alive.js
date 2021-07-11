/*
*/

const XTroid = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp
        try {
             pp = await message.client.getProfilePicture(
                message.jid.includes('-') ? message.data.participant : message.jid ); } 
             
             catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) =>
         { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: "\n»»————　♔　———-««\n" + Config.ALIVEMSG });
    
    });
    }));

}
else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp

        try {
             pp = await message.client.getProfilePicture(
                 message.jid.includes('-') ? message.data.participant : message.jid ); } 
                 
                 catch {
                      pp = await message.client.getProfilePicture(); }

        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) =>
         { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: "\n»»————　♔　———-««\n" + Config.ALIVEMSG });
         });
    }));
 
}
