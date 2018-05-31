console.log ('Starting app.');
const fs = require ('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require ('./notes.js');

const titleOptions = {
    describe: 'Title of note', 
    demand: true,                // Required
    alias: 't'
}

const bodyOptions = { 
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

var command = process.argv[2];
const argv = yargs
    .command('add', 'Add a new Note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all Notes')
    .command('read', 'Read a new Note', {
        title: titleOptions
    })
   .command('remove', 'Remove a Note', {
        title: titleOptions
    })
    .help()
    .argv;

console.log ('Yargs: ', argv);

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