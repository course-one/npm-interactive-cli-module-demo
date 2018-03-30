const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../lib/values');

const questions = [
    { type: 'list', name: 'coffeType', message: 'Choose coffee type', choices: values.typesPlain },
    { type: 'list', name: 'sugarLevel', message: 'Choose your sugar level', choices: values.sugarPlain },
    { type: 'confirm', name: 'decaf', message: 'Do you prefer your coffee to be decafe?', default: false },
    { type: 'confirm', name: 'cold', message: 'Do you prefer your coffee to be cold?', default: false },
    { type: 'list', name: 'servedIn', message: 'How do you prefer your coffee to be served in', choices: values.servedIn },
    { type: 'confirm', name: 'stirrer', message: 'Do you prefer your coffee with a stirrer?', default: true },
];

module.exports = function () {
    inquirer
        .prompt(questions)
        .then(function (answers) {
            console.log('YOUR ORDER');
            console.log('------------------');

            console.log(pad(colors.grey('Coffee type: '), 30), answers.coffeType);
            console.log(pad(colors.grey('Sugar level: '), 30), answers.sugarLevel);
            console.log(pad(colors.grey('Decaf: '), 30), answers.decaf);
            console.log(pad(colors.grey('Cold: '), 30), answers.cold);
            console.log(pad(colors.grey('Served in: '), 30), answers.servedIn);
            console.log(pad(colors.grey('With stirrer: '), 30), answers.stirrer);
            
        });
};