console.log ('starting notes.js');

var addNote  = (title, body) => {
    console.log ('addnote: ', title, body);
}

var getAll = () => {
    console.log ('getAll');
}

var readNote = (title) => {
    console.log ('readNote: ', title);
}

var removeNote = (title) => {
    console.log ('removeNote: ', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};