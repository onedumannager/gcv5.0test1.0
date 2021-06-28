const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs')
//

if (Config.WORKTYPE == 'private') {
Asena.addCommand({ pattern: 'movie ?(.*)', fromMe: true, desc: "Get Mod App From Happymod" }, (async (message, match) => {
	if (response.statusCode === 200) return 
    
    await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);

	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });

	let msg = '';
    msg += '*App*' + '```' + json.result[0].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[0].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[0].url + '```' + '\n';
    msg += '*App*' + '```' + json.result[1].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[1].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[1].url + '```' + '\n';
    msg += '*App*' + '```' + json.result[2].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[2].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[2].url + '```' + '\n';
	var respoimage = await axios.get(`https://telegra.ph/file/1752cad03f62b0263df62.jpg`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));
}
else if (Config.WORKTYPE == 'public') {
Asena.addCommand({ pattern: 'hpmod ?(.*)', fromMe: true, desc: "Get Mod App From Happymod" }, (async (message, match) => {
	if (response.statusCode === 200) return 
    
    await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);

	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });

	let msg = '';
    msg += '*App*' + '```' + json.result[0].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[0].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[0].url + '```' + '\n';
    msg += '*App*' + '```' + json.result[1].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[1].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[1].url + '```' + '\n';
    msg += '*App*' + '```' + json.result[2].title + '```' + '\n';
    msg += '*Rate*\n' + '```' + json.result[2].rating + '```' + '\n';
    msg += '*Link*\n' + '```' + json.result[2].url + '```' + '\n';
	var respoimage = await axios.get(`https://telegra.ph/file/1752cad03f62b0263df62.jpg`, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));
}
