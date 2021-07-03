import Game from "../core/GameLogic/game";
import App from "../pages/app";
import Card from "./card";
import Congradulation from "./congradulation";
import Timer from "./timer";

class CardsContainer {
  private container: HTMLElement;
  private cards: Card [][];
  private difficunity: {x: number, y: number};
  private timer: Timer;
  public game: Game;

  constructor(difficunity: {x: number, y: number}) { //difficunity is dimension of game field.
    // Object consist of properties x and y (numbers of cards in vertical and horizontal axes)
    this.container = document.createElement('div');
    this.container.className = 'card-container';
    this.difficunity = difficunity;
    this.cards = [[]];
    this.timer = new Timer(this);
    this.container.append(this.timer.render());
    this.game = new Game({x: App.gameSettings.getDifficunity(), y: App.gameSettings.getDifficunity()});
  }

  addCardsToContainer() {
    let game = new Game({x: App.gameSettings.getDifficunity(), y: App.gameSettings.getDifficunity()});
    game.fillRandomCardsInTable();
    game.visibleAllCards();
    this.game = game;
    for (let i=0; i<this.difficunity.x; i++) {
      this.cards[i] = [];
      for (let j=0; j<this.difficunity.y; j++) {
        const card = new Card(game.getCard(i, j), 'row'+i+'collumn'+j, game, {i, j}, this);
        this.cards[i][j] = card;
        this.container.append(card.render());
      }
    }
  }

  public refresh(game: Game) {
    let cardsToRefresh: Card[];
    cardsToRefresh = [];

    for (let i=0; i<this.difficunity.x; i++) {
      for (let j=0; j<this.difficunity.y; j++) {
        if(game.openedCards[i][j]==false) {
          const card = new Card(game.getCard(i, j), 'row'+i+'collumn'+j, game, {i, j}, this);
          cardsToRefresh.push(card);
        }
      }
    }

    cardsToRefresh.forEach((item) => {
      let pidor = document.getElementById(item.cardId);
      pidor?.replaceWith(item.render());
    });

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
      });
    });
    return this.container;
  }
}

export default CardsContainer