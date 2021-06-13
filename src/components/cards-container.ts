import Game from "../core/GameLogic/game";
import Card from "./card";

class CardsContainer {
  private container: HTMLElement;
  private cards: Card [][];
  private difficunity: {x: number, y: number};
  constructor(difficunity: {x: number, y: number}) { //difficunity is dimension of game field.
    // Object consist of properties x and y (numbers of cards in vertical and horizontal axes)
    this.container = document.createElement('div');
    this.container.className = 'card-container';
    this.difficunity = difficunity;
    this.cards = [[]]
  }

  addCardsToContainer() {
    let game = new Game({x: 4, y: 4});
    game.fillRandomCardsInTable();
    for (let i=0; i<this.difficunity.x; i++) {
      this.cards[i] = [];
      for (let j=0; j<this.difficunity.y; j++) {
        const card = new Card('card', game.getCard(i, j));
        this.cards[i][j] = card;
        this.container.append(card.render());
      }
    }
  }

  addCardStyle(x: number, y: number, newStyle: string) {
    const card = new Card(newStyle, 0);
    this.cards[x][y] = card;
  }

  render() {
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