/* 
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const axios = require('axios');
const fs = require('fs')
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('memes');
const ll ="*Need some Word*"
const Ln = "Make memes your own\nඔබගේම මිම් සාදාගැනීමට "
const PRN =  "Please replyto photo\nකරුණාකර පින්තුරයකට් රිප්ලයි කරන්න\nEg: ```.meme text1,text2```"
const code = "╔════════════════════╗\n║   😹 *My memes List* 😹\n║\n║\n╠═══ *🎭commands🎭*\n║\n╠══ *.bocca* text\n╠══ *.mymeme* text\n╠══ *.santha* text\n╠══ *.chaina* text\n╠══ *.bomu* text\n╠══ *.saduni* text\n╠══ *.tharindu* text\n╠══ *.meme* text1,text2\n║\n╚════════════════════╝"

if (Config.WORKTYPE == 'private') {
	
	
	      XTroid.addCommand({pattern: 'mpack', fromMe: true, desc: Ln,}, (async (message, match) => {

   		 await message.client.sendMessage(
  
    			  message.jid,code, MessageType.text);
  
  }));

    XTroid.addCommand({pattern: 'meme ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'asena-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, {filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
            await info.delete();    
        });
    }));
	
	XTroid.addCommand({ pattern: 'bocca ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));
  
     XTroid.addCommand({ pattern: 'mymeme ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
       XTroid.addCommand({ pattern: 'santha ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
      XTroid.addCommand({ pattern: 'chaina ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
        XTroid.addCommand({ pattern: 'bomu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
  XTroid.addCommand({ pattern: 'saduni ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
  
  XTroid.addCommand({ pattern: 'tharindu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
}

//=========================================================================================================================================================================================================================================================================================


else if (Config.WORKTYPE == 'public') {

    XTroid.addCommand({pattern: 'meme', fromMe: false, desc: Ln,}, (async (message, match) => {

        await message.client.sendMessage(
      
          message.jid,code, MessageType.text);
      
      }));

      XTroid.addCommand({ pattern: 'bocca ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
       XTroid.addCommand({ pattern: 'mymeme ?(.*)', fromMe: false , dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
       XTroid.addCommand({ pattern: 'santha ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
        XTroid.addCommand({ pattern: 'chaina ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
          XTroid.addCommand({ pattern: 'bomu ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
  
  XTroid.addCommand({ pattern: 'saduni ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
  
  XTroid.addCommand({ pattern: 'tharindu ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCommand({pattern: 'meme ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

    if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
    var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(',');
        topText = split[0];
        bottomText = split[1];
    }
    else {
        topText = match[1];
        bottomText = '';
    }

    var info = await message.reply(Lang.DOWNLOADING);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    }); 

    memeMaker({
        image: location,         
        outfile: 'asena-meme.png',
        topText: topText,
        bottomText: bottomText,
    }, async function(err) {
        if(err) throw new Error(err)
        await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, {filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
        await info.delete();    
    });
}));








XTroid.addCommand({pattern: 'mpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    await message.client.sendMessage(

          message.jid,code, MessageType.text);

}));

XTroid.addCommand({pattern: 'meme ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {   

if (message.reply_message === false) return await message.client.sendMessage(message.jid,PRN, MessageType.text);
var topText, bottomText;
if (match[1].includes(';')) {
    var split = match[1].split(';');
    topText = split[1];
    bottomText = split[0];
}
else {
    topText = match[1];
    bottomText = '';
}

var info = await message.reply(Lang.DOWNLOADING);

var location = await message.client.downloadAndSaveMediaMessage({
    key: {
        remoteJid: message.reply_message.jid,
        id: message.reply_message.id
    },
    message: message.reply_message.data.quotedMessage
}); 

memeMaker({
    image: location,         
    outfile: 'asena-meme.png',
    topText: topText,
    bottomText: bottomText,
}, async function(err) {
    if(err) throw new Error(err)
    await message.client.sendMessage(message.jid, fs.readFileSync('asena-meme.png'), MessageType.image, {filename: 'asena-meme.png', mimetype: Mimetype.png, caption: Config.CAPTION_KEY});
    await info.delete();    
});
}));

XTroid.addCommand({ pattern: 'bocca ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

XTroid.addCommand({ pattern: 'mymeme ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));
XTroid.addCommand({ pattern: 'santha ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCommand({ pattern: 'chaina ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCommand({ pattern: 'bomu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCommand({ pattern: 'saduni ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

XTroid.addCommand({ pattern: 'tharindu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var lasiyasimg = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

}));

    }
