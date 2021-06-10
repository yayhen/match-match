import Page from './../../core/templates/page'

class Game extends Page {
  constructor(id: string) {
    super(id)
  }

  render() {
    const header = this.createHeader('Game');
    const main = this.createMain('good luck!');
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default Game