console.log ('Starting app.');

const fs = require ('fs');
const os = require('os');
const notes = require ('./notes.js');

var user = os.userInfo();

// fs.appendFile ('greetings.txt', `Hello ${user.username} !\r\n`, (err) => {
//     if (err) console.log ( err );
// });

// console.log (notes.age);


var res = notes.addNote();

console.log (res);