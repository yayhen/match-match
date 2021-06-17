import Game from "../core/GameLogic/game";
import CardsContainer from "./cards-container";
import Congradulation from "./congradulation";

const hui = require('../assets/images/animals.jpg').default

class Card {
  private container: HTMLElement;
  private openedCard: boolean;
  private cardId: string;
  private imageNumber: number;
  private game: Game;
  private cardPosition: {i:number, j: number};
  private cardsContainer: CardsContainer;

  constructor(cardClassName: string, imageNumber: number, id: string, game: Game, cardPosition: {i:number, j: number}, cardsContainer: CardsContainer) {
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
    this.openedCard = true;
    this.render();
  }

  makeCardImageInvisible(): void {
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
    this.openedCard = false;
    this.render();
    
  }

  cardClickHandler(): void {
    if(this.openedCard === true && this.game.winCards[this.cardPosition.i][this.cardPosition.j]===false) {
      this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = false;
      this.makeCardImageInvisible();
      return;
    }

    
    if(this.openedCard === false) {
      let totalCardsOpened: number = 0;
      let cardOpenPosition: {x: number, y: number} = {x: -1, y: -1};
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
      // if(totalCardsOpened > 1) {
      //   this.game.invisibleAllExceptWinCards();
      //   this.cardsContainer.refresh(this.game);
      // }

      let winGameCheck: boolean = true;
      for(let i=0; i<this.game.openedCards.length; i++) {
        for(let j=0; j<this.game.openedCards[0].length; j++) {
          if(this.game.winCards[i][j]===false) {
            winGameCheck = false;
            break
          }
        }
      }
      if(winGameCheck) {
        this.cardsContainer.refresh(this.game);
        // let modalCongradulation = new Congradulation();
        // document.body.append(modalCongradulation.render());
      }
    }
  }


  render(): HTMLElement {
    this.container.onclick = this.cardClickHandler.bind(this);
    return this.container;
  }
}

export default Card