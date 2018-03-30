#!/usr/bin/env node

const program = require('commander');

// import function to list coffeee menu
const list = require('../lib/list');

// import function to order a coffee
const order = require('../lib/order');

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List coffee menu') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });


// Order a coffee
// $ coffee-shop order
// $ coffee-shop o
program
    .command('order') // sub-command name
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description

    // function to execute when command is uses
    .action(function () {
        order();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);