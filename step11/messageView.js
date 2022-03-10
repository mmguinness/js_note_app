class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButton = document.querySelector('#hide-message-button');

    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButton.addEventListener('click', () => {
      this.hideMessage();
   });

  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'message')
    this.div.innerText = document.querySelector('#message-input').value;
    
    this.mainContainerEl.append(this.div);
  }

  hideMessage() {
    const message = document.getElementById('message');
    message.remove();
  }
}

module.exports = MessageView;