/*
*/

const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

Asena.addCommand({on: 'test', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {
      var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid,"hri", MessageType.text);
    
      }));
