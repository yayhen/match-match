const hui = require('../assets/images/animals.jpg').default

class Card {
  private container: HTMLElement;
  private cardVisible: boolean;
  private cardId: string;
  private imageNumber: number;
  
  constructor(cardClassName: string, imageNumber: number, id: string) {
    this.cardId = id;
    this.imageNumber = imageNumber;
    this.container = document.createElement('div');
    this.container.className = cardClassName;
    this.container.id = id;
    let canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 116;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = hui;
    let offsetX: number = 0;
    let offsetY: number = 0;
    if (imageNumber>12) {
      offsetX = 100*(imageNumber % 12 -1);
      offsetY = 116*(Math.floor(imageNumber/12));
      if(imageNumber % 12 === 0) {
        offsetX = 100*11;
        offsetY = 116*(Math.floor(imageNumber/12)-1);
      }
    } else if(imageNumber!=1){
      offsetX = 100*(imageNumber-1);
    }
    image.addEventListener('load', () => {
      ctx?.drawImage(image, offsetX, offsetY, 100, 116, 0, 0, 100, 116);
    })
    this.container.append(canvas);
    this.cardVisible = true;
  }

  

  makeKardImageVisible() {
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    let canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 116;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = hui;
    let offsetX: number = 0;
    let offsetY: number = 0;
    if (this.imageNumber>12) {
      offsetX = 100*(this.imageNumber % 12 -1);
      offsetY = 116*(Math.floor(this.imageNumber/12));
      if(this.imageNumber % 12 === 0) {
        offsetX = 100*11;
        offsetY = 116*(Math.floor(this.imageNumber/12)-1);
      }
    } else if(this.imageNumber!=1){
      offsetX = 100*(this.imageNumber-1);
    }
    image.addEventListener('load', () => {
      ctx?.drawImage(image, offsetX, offsetY, 100, 116, 0, 0, 100, 116);
    })
    this.container.append(canvas);
    let cardToInvisible = document.getElementById(this.cardId);
    cardToInvisible?.replaceWith(this.container);
    this.cardVisible = true;
    this.render();
  }

  makeCardImageInvisible() {
    let cardToInvisible = document.getElementById(this.cardId);
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    let canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 116;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = hui;
    image.addEventListener('load', () => {
      ctx?.drawImage(image, -250, -250, 100, 116, 0, 0, 100, 116);
    })
    this.container.append(canvas);
    cardToInvisible?.replaceWith(this.container);
    this.cardVisible = false;
    this.render();
  }

  cardClickHandler() {
    (this.cardVisible === true) ? this.makeCardImageInvisible() : 
                                  this.makeKardImageVisible();
  }

  render() {
    this.container.onclick = this.cardClickHandler.bind(this);
    return this.container;
  }
}

export default Card