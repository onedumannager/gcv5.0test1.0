const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const axios = require('axios');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('sticker');

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'a2', fromMe: true, desc: Lang.STICKER_DESC}, (async (message, match) => {    

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var location = await axios.get(`https://restfulapi.my.id/api/textmaker/attp?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        ffmpeg(location)
            .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"])
            .videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1')
            .save('sticker.webp')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
