const Notesmodule = require('./notesModel');

describe('Notesmodel class', () => {
    it('can retrieve note', () => {
        const model = new Notesmodule();
        expect(model.getNotes()).toEqual([]);
    });
    it('can retrieve note', () => {
        const model = new Notesmodule();
        model.addNotes('note1')
        expect(model.getNotes()).toEqual(['note1']);
    });
    it('can retrieve note', () => {
        const model = new Notesmodule();
        model.addNotes('note1');
        model.addNotes('note2');
        expect(model.getNotes()).toEqual(['note1','note2']);
    });
    it('can retrieve note', () => {
        const model = new Notesmodule();
        model.addNotes('note1');
        model.addNotes('note2');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});

