import Game from "../core/GameLogic/game";
import CardsContainer from "./cards-container";

const animalImagesUrl = require('../assets/images/animals.jpg').default
const animalImagesPosition = {
  imageWidth: 100,
  imageHight: 116,
  imagesInRow: 12,
}

class Card {
  private container: HTMLElement;
  private openedCard: boolean;
  public cardId: string;
  private imageNumber: number;
  private game: Game;
  private cardPosition: {i:number, j: number};
  private cardsContainer: CardsContainer;

  constructor(imageNumber: number, 
              id: string, 
              game: Game, 
              cardPosition: {i:number, j: number}, 
              cardsContainer: CardsContainer) {
    this.cardId = id;
    this.imageNumber = imageNumber;
    this.container = document.createElement('div'); 
    this.makeKardImageVisible();
    this.openedCard = true; 
    this.game = game;
    this.cardPosition = cardPosition;
    this.cardsContainer = cardsContainer;
    if(game.openedCards[cardPosition.i][cardPosition.j]===false) {
      this.openedCard = false;
      this.makeCardImageInvisible();
    }    
  }

  makeKardImageVisible(): void {
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    let canvas = document.createElement('canvas');
    const imageWidth = animalImagesPosition.imageWidth;
    const imageHight = animalImagesPosition.imageHight;
    const imagesInRow = animalImagesPosition.imagesInRow;
    canvas.width = imageWidth;
    canvas.height = imageHight;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = animalImagesUrl;
    let offsetX: number = 0;
    let offsetY: number = 0;
    if (this.imageNumber>imagesInRow) {
      offsetX = imageWidth*(this.imageNumber % imagesInRow -1);
      offsetY = imageHight*(Math.floor(this.imageNumber/imagesInRow));
      if(this.imageNumber % imagesInRow === 0) {
        offsetX = imageWidth*(imagesInRow - 1);
        offsetY = imageHight*(Math.floor(this.imageNumber/imagesInRow)-1);
      }
    } else if(this.imageNumber!=1){
      offsetX = imageWidth*(this.imageNumber-1);
    }
    image.addEventListener('load', () => {
      ctx?.drawImage(image, offsetX, offsetY, imageWidth, imageHight, 0, 0, imageWidth, imageHight);
    })
    this.container.append(canvas);
    let cardToInvisible = document.getElementById(this.cardId);
    cardToInvisible?.replaceWith(this.container);
    this.openedCard = true;
    this.render();
  }

  makeCardImageInvisible(): void {
    let cardToInvisible = document.getElementById(this.cardId);
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    let canvas = document.createElement('canvas');
    const imageWidth = animalImagesPosition.imageWidth;
    const imageHight = animalImagesPosition.imageHight;
    const imagesInRow = animalImagesPosition.imagesInRow;
    canvas.width = imageWidth;
    canvas.height = imageHight;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = animalImagesUrl;
    image.addEventListener('load', () => {
      ctx?.drawImage(image, -250, -250, imageWidth, imageHight, 0, 0, imageWidth, imageHight);
    })
    this.container.append(canvas);
    cardToInvisible?.replaceWith(this.container);
    this.openedCard = false;
    this.render();
  }

  cardClickHandler(): void {
    const isWinCard = this.game.winCards[this.cardPosition.i][this.cardPosition.j];
    if(this.openedCard === true && !isWinCard) {
      this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = false;
      this.makeCardImageInvisible();
      return;
    }

    if(this.openedCard === false) {
      let totalCardsOpened: number = 0;
      let cardOpenPosition: {x: number, y: number} = {x: NaN, y: NaN};
      //In cycle calculating number of opened cards without wins cards
      for(let i=0; i<this.game.openedCards.length; i++) {
        for(let j=0; j<this.game.openedCards[0].length; j++) {
          if(this.game.openedCards[i][j]===true && this.game.winCards[i][j]===false) {
            totalCardsOpened += 1;
            cardOpenPosition.x = i;
            cardOpenPosition.y = j;
          }
        }
      }
      if(totalCardsOpened === 0) {
        this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = true;
        this.makeKardImageVisible();
      } 
      if(totalCardsOpened === 1) {
        this.game.compares += 1;
        this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = true;
        this.makeKardImageVisible();
        const firstCardOpened: number = this.game.gameField[this.cardPosition.i][this.cardPosition.j];
        const secondCardOpened: number = this.game.gameField[cardOpenPosition.x][cardOpenPosition.y];
        if (firstCardOpened === secondCardOpened) {
          this.game.winCards[this.cardPosition.i][this.cardPosition.j] = true;
          this.game.winCards[cardOpenPosition.x][cardOpenPosition.y] = true;
        } else {
          this.game.incorrectCompares += 1;
          setTimeout(() => {
            this.game.invisibleAllExceptWinCards();
            this.cardsContainer.refresh(this.game);
          }, 500);
        }
      }
      this.cardsContainer.refresh(this.game)
    }
  }

  render(): HTMLElement {
    this.container.onclick = this.cardClickHandler.bind(this);
    return this.container;
  }
}

export default Card