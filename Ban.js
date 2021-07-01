const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./admin/' + Config.DMN + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Config.DMN + ' ADMIN...')
    );

    var json = JSON.parse(fs.readFileSync('./admin/' + Config.DMN + '.json'));
} else {
    console.log(
        chalk.red.bold('wrong code.')
    );

    var json = JSON.parse(fs.readFileSync('./admin/wft.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    admin: json,
    getString: getString
}
