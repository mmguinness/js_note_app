class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let p = document.createElement("p");
    this.mainContainerEl.append("Some new text", p);
  }

}

module.exports = View;