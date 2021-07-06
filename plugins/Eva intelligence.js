/* 
*/


const XTroid = require('../events');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
const { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('voicy');
const conf = require('../config');
const axios = require('axios')
const axiosdef = require("axios").default;
const os = require('os')
const translatte = require('translatte');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});
let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

let wk = conf.WORKTYPE == 'public' ? false : true

var reply_eva = ''



XTroid.addCommand({on: 'text', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {
    if (message.message.startsWith('Liza') && conf.FULLEVA !== 'true') {        
        var unique_ident = message.client.user.jid.split('@')[0]      
        var finm = message.message.replace('Liza', '').replace(' ', '')
        var trmsg = finm
        var uren = encodeURI(trmsg)

        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    
            var  fins = response.data.cnt 
            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
        })
    }
}));
XTroid.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        if (conf.FULLEVA == 'true' && ((!message.jid.includes('-')) || (message.jid.includes('-') && 
            (( message.mention !== false && message.mention.length !== 0 ) || message.reply_message !== false)))) {
            if (message.jid.includes('-') && (message.mention !== false && message.mention.length !== 0)) {
                message.mention.map(async (jid) => {
                    if (message.client.user.jid.split('@')[0] === jid.split('@')[0]) {
                        var unique_ident = message.client.user.jid.split('@')[0]      
                        var finm = message.message
                        var trmsg = finm
                        var uren = encodeURI(trmsg)
                        await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                            var  fins = response.data.cnt                          
                            await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                        })
                    }
                })
            } else if (message.jid.includes('-') && message.reply_message !== false) {
                if (message.reply_message.jid.split('@')[0] === message.client.user.jid.split('@')[0]) {
                    var unique_ident = message.client.user.jid.split('@')[0]      

                    var finm = message.message
                    var trmsg = finm
                    var uren = encodeURI(trmsg)

                    await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                        var  fins = response.data.cnt                              
                        await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                    })
                }
            } else {
                var unique_ident = message.client.user.jid.split('@')[0]      
                var finm = message.message
                var trmsg = finm
                var uren = encodeURI(trmsg)

                await axios.get('http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=' + unique_ident + '&msg=' + uren).then(async (response) => {
                    var  fins = response.data.cnt  
                    await message.client.sendMessage(message.jid,fins, MessageType.text, { quoted: message.data})
                })
            }
        }

}));

var fulleva_dsc = ''
var already_on = ''
var already_off = ''
var succ_on = ''
var succ_off = ''
if (conf.LANG == 'SI') {
    fulleva_dsc = 'Activates full functional Liza features. Turn your account into a ai chatbot!'
    already_on = 'Liza artificial intelligence is already fully functional.'
    already_off = 'Liza artificial intelligence is currently running semi-functional.'
    succ_on = 'Liza Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Liza Set to Semi-Functional! Please wait a bit! ☑️'
}
if (conf.LANG == 'EN') {
    fulleva_dsc = 'Activates full functional Liza features. Turn your account into a ai chatbot!'
    already_on = 'Liza artificial intelligence is already fully functional.'
    already_off = 'Liza artificial intelligence is currently running semi-functional.'
    succ_on = 'Liza Opened Fully Functionally! Please wait a bit! ✅'
    succ_off = 'Liza Set to Semi-Functional! Please wait a bit! ☑️'
}

XTroid.addCommand({ pattern: 'liza ?(.*)', desc: fulleva_dsc, fromMe: true, usage: '.liza on / off' }, (async (message, match) => {
    var eva_status = `${conf.FULLEVA}`
    if (match[1] == 'on') {
        if (eva_status == 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_on + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_EVA']: 'true'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (eva_status !== 'true') {
            return await message.client.sendMessage(message.jid, '*' + already_off + '*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['FULL_EVA']: 'false'
                } 
            });
            await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
        }
    }
}));
