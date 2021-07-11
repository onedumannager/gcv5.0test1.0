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







XTroid.addCMD({pattern: 'ptl ?(.*)', fromMe: true, dontAddCMDList: true}, (async (message, match) => {

    await axios.get(`${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
var pl = (match[1])
              await download(`${data}`, '/root/lizy/plugins/' + pl + '.js')
          } catch(err) { 
              console.log(err)
          } 
       
    });
}));
