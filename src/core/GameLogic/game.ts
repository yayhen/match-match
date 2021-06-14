class Game {
  private gameField: number[][];

  constructor(difficunity: {x: number, y: number}) {
    this.gameField = [[]]
    for(let i=0; i<difficunity.x; i++) {
      this.gameField[i] = [];
      for(let j=0; j<difficunity.y; j++) {
        this.gameField[i][j] = 0;
      }
    }
  }

  fillRandomCardsInTable() {
    let cardsBeforeRandomize: number[];
    cardsBeforeRandomize = [];
    for(let i=1; i<=this.gameField.length**2 / 2; i++) {
      cardsBeforeRandomize.push(i);
      cardsBeforeRandomize.push(i);
    }
    
    let randomCard: number;
    this.gameField.forEach((item, index) => {
      item.forEach((itm, ind) => {
        randomCard = Math.floor(Math.random()*cardsBeforeRandomize.length);
        this.gameField[index][ind] = cardsBeforeRandomize[randomCard];
        cardsBeforeRandomize.splice(randomCard, 1);
      })
    })
  }

  getCard(x: number, y: number) {
    return this.gameField[x][y];
  }
}

export default Game;