class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    let listofnotes = this.model.getNotes();
    listofnotes.forEach( note => { 
    let noteEl = document.createElement("div");
    noteEl.innerText = note;
    noteEl.className = "note";
    this.mainContainerEl.append(noteEl);
    }) 
  }
}




module.exports = NotesView;