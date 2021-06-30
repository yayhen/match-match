import NewUser from '../../components/newUser';
import Page from './../../core/templates/page'

class AboutGame extends Page {
  constructor(id: string) {
    super(id)
  }

  protected createMain(text: string) {
    const mainText = document.createElement('main');
    let newUserButton = document.createElement('button');
    newUserButton.innerText = 'New user'
    newUserButton.onclick = () => {
      let newUser = new NewUser();
      this.container.append(newUser.render());
    }
    mainText.append(text);
    mainText.append(newUserButton);
    return mainText;
  }

  render() {
    const header = this.createHeader('About game');
    const textAbout: string = 'The playing field consists of cards with different patterns on the back.  \
    Before the start of the game session, the player is shown the location of all paired cards, after 30 seconds they are hidden. \
    The victory is counted when all pairs of cards are found.'
    const main = this.createMain(textAbout);
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default AboutGame