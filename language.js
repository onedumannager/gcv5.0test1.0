const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Config.LANG + ' language...')
    );

    var lasijson = JSON.parse(fs.readFileSync('./language/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var lasijson = JSON.parse(fs.readFileSync('./language/EN.json'));
}

function getString(file) {
    return lasijson['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}