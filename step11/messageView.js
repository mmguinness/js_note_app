class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    let message = document.createElement('#message');
    message.innerText = "New message from JS";
    this.mainContainerEl.append(message);

  }
}

module.exports = MessageView;