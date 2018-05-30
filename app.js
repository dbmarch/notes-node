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
    var noteArray = notes.getAll();
    console.log (noteArray.length + ' notes found:'); 
    console.log (noteArray);
    debugger;
    if (noteArray) {
        noteArray.forEach ((note)=> {
            console.log ('---');
            console.log (`Title: ${note.title}`);
            console.log (`Body: ${note.body}`);
        });
    } else {
        console.log ('Notes are empty');
    }

} else if (command === 'read') {
    note = notes.readNote(argv.title);
    if (note) {
        console.log ('---');
        console.log (`Title: ${note.title}`);
        console.log (`Body: ${note.body}`);
    } else {
        console.log ('Note not found');
    }

} else if (command === 'remove') {
   var message = notes.removeNote(argv.title) ? "Note Removed" : "Note Not found";
   console.log (message);
} else {
    console.log ('Command not recognized');
}