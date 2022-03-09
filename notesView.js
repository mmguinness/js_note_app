class NotesView {
  constructor(model) {
    this.model = model
  }

  displaysNotes() {
    let listofnotes = this.model.getNotes();
    
    let div = document.createElement("div");
  }
}




module.exports = NotesView;