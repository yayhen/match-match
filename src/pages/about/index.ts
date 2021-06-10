import Page from './../../core/templates/page'

class AboutGame extends Page {
  constructor(id: string) {
    super(id)
  }

  render() {
    const header = this.createHeader('About Game');
    const main = this.createMain('Match-match game');
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default AboutGame