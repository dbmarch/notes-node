console.log ('Starting app.');

const fs = require ('fs');
const os = require('os');
const notes = require ('./notes.js');
// Load the full build.
const _ = require('lodash');

var user = os.userInfo();

// fs.appendFile ('greetings.txt', `Hello ${user.username} !\r\n`, (err) => {
//     if (err) console.log ( err );
// });

// console.log (notes.age);
// var res = notes.addNote();
// console.log (res);
// console.log (notes.add(3,4));

// console.log (_.isString(true));
// console.log (_.isString('Andrew'));

var filteredArray=_.uniq(['Dave', 1, 'John', 1,2,3,4]);
console.log (filteredArray);