/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const Desk = "Temp logo pack\nතාවකාලික පින්තුර සාදනය\n\n╭┅🌸 *.tmug*\n╭┅🌸 *.tlove*\n╭┅🌸 *.tnaru*\n╭┅🌸 *.tgrass*\n╭┅🌸 *.tsky*\n╭┅🌸 *.tcof*\n╭┅🌸 *.tneon*\n╭┅🌸 *.tpubg*\n╭┅🌸 *.tbit*\n```.tbit text1,text2```\n╭┅🌸 *.tbt*\n```.tbt text1,text2```\n"

if (Config.WORKTYPE == 'private') {


    Asena.addCommand({ pattern: 'tpack ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));





    Asena.addCommand({ pattern: 'tmug ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tlove ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tnaru ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tgrass ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tsky ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tcof ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({ pattern: 'tpubg ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));


    Asena.addCommand({pattern: 'tbit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));

        Asena.addCommand({pattern: 'tbt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));




}


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'tmug ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tlove ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tnaru ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tgrass ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tsky ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tcof ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    Asena.addCommand({ pattern: 'tneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    
    Asena.addCommand({pattern: 'tbit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));
    
        Asena.addCommand({pattern: 'tbt ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));
        }    