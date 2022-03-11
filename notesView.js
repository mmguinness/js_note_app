class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#create-note');

    this.buttonEl.addEventListener('click', () => {
      this.displayNotes();
    });
  }

  displayNotes() {
    let itemsToBeRemoved = document.querySelectorAll('.note');
    itemsToBeRemoved.forEach( removeNote => {
      removeNote.remove();
    })

    this.model.addNote(document.querySelector('#input-text').value);
    document.querySelector('#input-text').value = "";

    let listofnotes = this.model.getNotes();
    listofnotes.forEach( note => { 
      let noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      noteEl.id = "note";
      this.mainContainerEl.append(noteEl);
    }) 
  }
}




module.exports = NotesView;