import Timer from '../../components/timer';

class Game {
  public gameField: number[][];

  public openedCards: boolean[][];

  public winCards: boolean[][];

  public score: number;

  public compares: number;

  public incorrectCompares: number;

  constructor(difficunity: { x: number, y: number }) {
    this.gameField = [[]];
    this.openedCards = [[]];
    this.winCards = [[]];
    for (let i = 0; i < difficunity.x; i++) {
      this.gameField[i] = [];
      this.openedCards[i] = [];
      this.winCards[i] = [];
      for (let j = 0; j < difficunity.y; j++) {
        this.gameField[i][j] = 0;
        this.openedCards[i][j] = false;
        this.winCards[i][j] = false;
      }
    }
    this.score = 0;
    this.compares = 0;
    this.incorrectCompares = 0;
  }

  fillRandomCardsInTable(): void {
    let cardsBeforeRandomize: number[];
    cardsBeforeRandomize = [];
    for (let i = 1; i <= this.gameField.length ** 2 / 2; i++) {
      cardsBeforeRandomize.push(i);
      cardsBeforeRandomize.push(i);
    }

    let randomCard: number;
    this.gameField.forEach((item, index) => {
      item.forEach((itm, ind) => {
        randomCard = Math.floor(Math.random() * cardsBeforeRandomize.length);
        this.gameField[index][ind] = cardsBeforeRandomize[randomCard];
        cardsBeforeRandomize.splice(randomCard, 1);
      });
    });
  }

  getCard(x: number, y: number): number {
    return this.gameField[x][y];
  }

  visibleAllCards() {
    for (let i = 0; i < this.openedCards.length; i++) {
      for (let j = 0; j < this.openedCards[0].length; j++) {
        this.openedCards[i][j] = true;
      }
    }
  }

  invisibleAllCards() {
    for (let i = 0; i < this.openedCards.length; i++) {
      for (let j = 0; j < this.openedCards[0].length; j++) {
        this.openedCards[i][j] = false;
      }
    }
  }

  invisibleAllExceptWinCards() {
    for (let i = 0; i < this.openedCards.length; i++) {
      for (let j = 0; j < this.openedCards[0].length; j++) {
        if (this.winCards[i][j] === false) {
          this.openedCards[i][j] = false;
        }
      }
    }
  }

  calculateScore(playedSeconds: number): number {
    const score = (this.compares - this.incorrectCompares) * 100 - playedSeconds * 10;
    return score > 0 ? score : 0;
  }
}

export default Game;
