console.log ('Starting app.');
const fs = require ('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require ('./notes.js');
var command = process.argv[2];
const argv = yargs.argv;
console.log ('Yargs: ', argv);
// console.log ('Command:', command);
// console.log (process.argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log ('Unable to add Note');
    } else {
        console.log ('Note Created');
        console.log ('---');
        console.log (`Title: ${note.title}`);
        console.log (`Body: ${note.body}`);
    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    console.log ('reading note');
    notes.readNote(argv.title);
} else if (command === 'remove') {
   console.log ('remove note');
   notes.removeNote(argv.title);
} else {
    console.log ('Command not recognized');
}