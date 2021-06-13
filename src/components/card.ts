const hui = require('../assets/images/animals.jpg').default

class Card {
  private container: HTMLElement;

  constructor(cardClassName: string, imageNumber: number) {
    this.container = document.createElement('div');
    this.container.className = cardClassName;
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
  }

  clicked () {
    console.log('pidoras');
  }

  render() {
    this.container.addEventListener('click', this.clicked);
    return this.container;
  }
}

export default Card