
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');
if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'hpmod ?(.*)', fromMe: true, desc: Lang.HMODD_DESC, }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return 
		var lasi = await axios.get(`https://telegra.ph/file/1752cad03f62b0263df62.jpg`, { responseType: 'arraybuffer' })
		await message.client.sendMessage(message.jid,Buffer.from(lasi.data),  MessageType.image,{mimetype: Mimetype.png, caption:
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n' + 
		'*📘 ' + Lang.Rate +'* ```' + json.result[0].rating + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n\n'+
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[1].title + '```\n' + 
		'*📘 ' + Lang.Rate +'* ```' + json.result[1].rating + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[1].url + '```\n\n'+
                '*📕 ' + Lang.NAMEY +'* ```' + json.result[2].title + '```\n' + 
		'*📘 ' + Lang.Rate +'* ```' + json.result[2].rating + '```\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[2].url + '```\n'});
		
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
else if (Config.WORKTYPE == 'public') {
	Asena.addCommand({pattern: 'hpmod ?(.*)', fromMe: false, desc: Lang.HMODD_DESC,  }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs&q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.Rate +'* ```' + json.result[0].rating + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
