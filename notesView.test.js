const NotesView = require('./notesView')

describe('NotesView', () => {
  describe('displayNotes', () => {
    const notesmodel = new NotesModel;
    notesmodel.addNotes('new note');
    notesmodel.addNotes('another note');

    const notesview = new NotesView(notesmodel);
    
    notesview.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });
});