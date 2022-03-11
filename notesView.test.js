/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');

describe('NotesView', () => {
  describe('displayNotes', () => {
    it('displays a note that a user inputs on the page', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

    const notesmodel = new NotesModel;
    const notesview = new NotesView(notesmodel);

    const formEl = document.querySelector('#input-text');
    formEl.value = 'Test title';

    const buttonEl = document.querySelector('#create-note');
    buttonEl.click();

    expect(document.querySelectorAll('#note')[0].innerText).toBe('Test title');
    });

    it('displays two notes on the page after two notes added to form', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

    const notesmodel = new NotesModel;
    const notesview = new NotesView(notesmodel);

    const formEl = document.querySelector('#input-text');
    formEl.value = 'First title';
    const buttonEl = document.querySelector('#create-note');
    buttonEl.click();

    
    formEl.value = 'Second title';
    buttonEl.click();

    expect(document.querySelectorAll('#note').length).toBe(2);
    });
  });


});