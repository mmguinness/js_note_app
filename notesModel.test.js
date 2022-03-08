const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  describe('getNotes', () => {
    it('return notes array', () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([])
    })
  })

  describe('addNote', () => {
    it('adds a note to notes array', () => {
      const model = new NotesModel();
      model.addNote('Buy milk');
      expect(model.getNotes()).toEqual(['Buy milk'])
    })
  })

  describe('reset', () => {
    it('clear the notes array', () => {
      const model = new NotesModel();
      model.addNote('Buy milk');
      model.reset();
      expect(model.getNotes()).toEqual([])
    })
  })
})