import Page from './../../core/templates/page'

class Settings extends Page {
  constructor(id: string) {
    super(id)
  }

  render() {
    const header = this.createHeader('Settings');
    const main = this.createMain('settings of game');
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default Settings