import Page from './../../core/templates/page'

class BestScores extends Page {
  constructor(id: string) {
    super(id)
  }

  render() {
    const header = this.createHeader('Best scores');
    const main = this.createMain('leaders in match');
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default BestScores