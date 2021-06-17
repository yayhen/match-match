import Game from "../core/GameLogic/game";
import Card from "./card";
import Congradulation from "./congradulation";
import Timer from "./timer";

class CardsContainer {
  private container: HTMLElement;
  private cards: Card [][];
  private difficunity: {x: number, y: number};
  private timer: Timer;

  constructor(difficunity: {x: number, y: number}) { //difficunity is dimension of game field.
    // Object consist of properties x and y (numbers of cards in vertical and horizontal axes)
    this.container = document.createElement('div');
    this.container.className = 'card-container';
    this.difficunity = difficunity;
    this.cards = [[]];
    this.timer = new Timer();
    this.container.append(this.timer.render());
  }

  addCardsToContainer() {
    let game = new Game({x: 4, y: 4});
    game.fillRandomCardsInTable();
    for (let i=0; i<this.difficunity.x; i++) {
      this.cards[i] = [];
      for (let j=0; j<this.difficunity.y; j++) {
        const card = new Card('card', game.getCard(i, j), 'row'+i+'collumn'+j, game, {i, j}, this);
        this.cards[i][j] = card;
        this.container.append(card.render());
      }
    }
  }

  public refresh(game: Game) {
    console.log('game.openedCards:', game.openedCards);
    for (let i=0; i<this.difficunity.x; i++) {
      this.cards[i] = [];
      for (let j=0; j<this.difficunity.y; j++) {
        const card = new Card('card', game.getCard(i, j), 'row'+i+'collumn'+j, game, {i, j}, this);
        this.cards[i][j] = card;
        this.container.append(card.render());
      }
    }
    this.container = document.createElement('div');
    this.container.className = 'card-container';
    this.render();
    let elementToReplace = document.getElementsByClassName('card-container');
    elementToReplace[0]?.replaceWith(this.container);
    this.container.append(this.timer.render());
    let winGameCheck: boolean = true;
      for(let i=0; i<game.openedCards.length; i++) {
        for(let j=0; j<game.openedCards[0].length; j++) {
          if(game.winCards[i][j]===false) {
            winGameCheck = false;
            break
          }
        }
      }
    if(winGameCheck) {
      this.timer.pause();
      let modalCongradulation = new Congradulation(game.calculateScore(this.timer.seconds));
      document.body.append(modalCongradulation.render());
    }
  }

  render(): HTMLElement {
    this.cards.forEach((item) => {
      let newRow = document.createElement('div');
      this.container.append(newRow);
      item.forEach(itm =>{
        this.container.append(itm.render());
      })

    })
    return this.container;
  }
}

export default CardsContainer