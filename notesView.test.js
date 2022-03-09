/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');

describe('NotesView', () => {
  describe('displayNotes', () => {
    it('displays two notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

    const notesmodel = new NotesModel;
    const notesview = new NotesView(notesmodel);
    notesmodel.addNote('new note');
    notesmodel.addNote('another note');

    
    
    notesview.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
    });
  });
});