const XTroid = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');
const axios = require('axios')
const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});



XTroid.addCMD({pattern: 'ptl ?(.*)', fromMe: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage("need link");

    var plug = await axios.get(`${match[1]}`, { responseType: 'arraybuffer' })
    var plugin_name = (match[1])
    fs.writeFileSync('./plugins/' + plugin_name + '.js', Buffer.from(plug.data));
    try {
        require('./' + plugin_name);
    } catch (e) {
        fs.unlinkSync('/root/lizy/plugins/' + plugin_name + '.js')
        return await message.sendMessage(Lang.INVALID_PLUGIN + ' ```' + e + '```');
    }
    
}));