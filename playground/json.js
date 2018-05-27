// var obj = {
//   name: 'Dave'  ,
//   age: 23
// };

// var stringObj = JSON.stringify(obj);
// console.log (stringObj);
// var personString = '{ "name" : "Dave", "age": 23 }';
// var personObj = JSON.parse(personString);
// console.log (personObj);

const fs = require ('fs');
var originalNote = {
    title: "Some Title",
    body: " Some Body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

note  = JSON.parse(noteString);
console.log (typeof note);
console.log (note);
