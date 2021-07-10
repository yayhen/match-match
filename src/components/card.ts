import Game from "../core/GameLogic/game";
import App from "../pages/app";
import CardsContainer from "./cards-container";
import Filter from "./filter";

const animalImagesUrl = require('../assets/images/animals.jpg').default
const girlImagesUrl = require('../assets/images/girls.jpg').default
const memImagesUrl = require('../assets/images/mems.jpg').default
const topCard = require('../assets/images/noneCard.png').default

const packList = [
  {
    name: 'animals',
    imageWidth: 100,
    imageHight: 116,
    imagesInRow: 12,
  },
  {
    name: 'girls', 
    imageWidth: 178,
    imageHight: 171,
    imagesInRow: 5,
  },
  {
    name: 'mems', 
    imageWidth: 72,
    imageHight: 72,
    imagesInRow: 7,
  },
]

class Card {
  private container: HTMLElement;
  private openedCard: boolean;
  public cardId: string;
  private imageNumber: number;
  private game: Game;
  private cardPosition: {i:number, j: number};
  private cardsContainer: CardsContainer;
  private imageUrl: string;
  private packNumber: number;

  constructor(imageNumber: number, 
              id: string, 
              game: Game, 
              cardPosition: {i:number, j: number}, 
              cardsContainer: CardsContainer) {
    this.cardId = id;
    this.imageNumber = imageNumber;
    this.container = document.createElement('div');
    switch (App.gameSettings.getImagesPack()) {
      case 'animals':
        this.imageUrl = animalImagesUrl;
        this.packNumber = 0;
        break;
      case 'girls':
        this.imageUrl = girlImagesUrl;
        this.packNumber = 1;
        break;
      case 'mems':
        this.imageUrl = memImagesUrl;
        this.packNumber = 2;
        break;
      default:
        this.imageUrl = animalImagesUrl;
        this.packNumber = 0;
    }
    this.openedCard = true; 
    this.game = game;
    this.cardPosition = cardPosition;
    this.cardsContainer = cardsContainer;
    this.makeKardImageVisible();
    if(game.openedCards[cardPosition.i][cardPosition.j]===false) {
      this.openedCard = false;
      this.makeCardImageInvisible();
    }
  }

  makeKardImageVisible(): void {
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    this.container.setAttribute('state', 'opened');
    let canvas = document.createElement('canvas');
    switch (App.gameSettings.getDifficunity()) {
      case 4:
        canvas.className = 'canvas-4-4';
        this.container.className = 'card-4-4';
        break
      case 6:
        canvas.className = 'canvas-6-6';
        this.container.className = 'card-6-6';
        break;
      case 8:
        canvas.className = 'canvas-8-8';
        this.container.className = 'card-8-8';
        break;
      default:
        canvas.className = 'canvas-4-4';
        this.container.className = 'card-4-4';
        break;
    }
    const imageWidth = packList[this.packNumber].imageWidth;
    const imageHight = packList[this.packNumber].imageHight;
    const imagesInRow = packList[this.packNumber].imagesInRow;
    canvas.width = 100;
    canvas.height = 115;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = this.imageUrl;
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
      ctx?.drawImage(image, offsetX, offsetY, imageWidth, imageHight, 0, 0, 100, 115);
    })
    this.container.append(canvas);
    let cardToReplace = document.getElementById(this.cardId);
    cardToReplace?.replaceWith(this.container);
    this.openedCard = true;
    this.render();
  }

  makeCardImageInvisible(): void {
    this.container = document.createElement('div');
    this.container.className = 'card';
    this.container.id = this.cardId;
    this.container.setAttribute('state', 'closed');
    let canvas = document.createElement('canvas');
    switch (App.gameSettings.getDifficunity()) {
      case 4:
        canvas.className = 'canvas-4-4';
        this.container.className = 'card-4-4';
        break
      case 6:
        canvas.className = 'canvas-6-6';
        this.container.className = 'card-6-6';
        break;
      case 8:
        canvas.className = 'canvas-8-8';
        this.container.className = 'card-8-8';
        break;
      default:
        canvas.className = 'canvas-4-4';
        this.container.className = 'card-4-4';
        break;
    }
    const imageWidth = packList[this.packNumber].imageWidth;
    const imageHight = packList[this.packNumber].imageHight;
    const imagesInRow = packList[this.packNumber].imagesInRow;
    canvas.width = 150;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    const image = document.createElement('img');
    image.src = topCard;
    image.addEventListener('load', () => {
      ctx?.drawImage(image, 5, 5, imageWidth, imageHight, 0, 0, 150, 150);
    })
    this.container.append(canvas);
    let cardToReplace = document.getElementById(this.cardId);
    cardToReplace?.replaceWith(this.container);
    this.openedCard = false;
    this.render();
  }

  cardClickHandler(): void {
    const itIsWinCard = this.game.winCards[this.cardPosition.i][this.cardPosition.j];
    if(this.openedCard && ! itIsWinCard) {
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
          let card = document.getElementById(this.cardId);
          card?.appendChild(Filter.greenFilter());
          card = document.getElementById('row'+cardOpenPosition.x+'collumn'+cardOpenPosition.y);
          card?.appendChild(Filter.greenFilter());
        } else {
          this.game.incorrectCompares += 1;
          let card = document.getElementById(this.cardId);
          card?.appendChild(Filter.redFilter());
          card = document.getElementById('row'+cardOpenPosition.x+'collumn'+cardOpenPosition.y);
          card?.appendChild(Filter.redFilter());
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