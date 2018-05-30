const fs = require ('fs');

const fileName = 'notes-data.json';

var fetchNotes = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync(fileName);
        notes = JSON.parse(notesString);
    } catch(e) {
        // console.log (e);
    }
    return notes;
}

var saveNotes = (notes) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(notes));
    } catch (e) {
    }
}

var addNote  = (title, body) => {
    console.log ('addnote: ', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note)=>note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return (note);
    } else {
        console.log ('Add Failed: Duplicate note.');
        note = null;
    }
}

var getAll = () => {
    console.log ('getAll');
    return fetchNotes();
}

var readNote = (title) => {
    console.log ('readNote: ', title);
    var notes = fetchNotes();
    var foundNote = notes.filter((note) => (note.title === title));
    if ( foundNote.length > 0){
        return foundNote[0];
    } 
}   

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => (note.title !== title));
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};