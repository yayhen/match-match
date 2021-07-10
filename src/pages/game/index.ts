import CardsContainer from '../../components/cards-container';
import App from '../app';
import Page from '../../core/templates/page';

class Game extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    const header = this.createHeader('Game');
    const main = this.createMain();
    const cardsContainer = new CardsContainer({ x: App.gameSettings.getDifficunity(), y: App.gameSettings.getDifficunity() });
    cardsContainer.addCardsToContainer();
    main.append(cardsContainer.render());
    this.container.append(header, main);
    return this.container;
  }
}

export default Game;
