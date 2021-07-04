import NewUser from '../../components/newUser';
import Page from './../../core/templates/page'
const registrationScreenshot = require('../../assets/images/registration.png').default;
const gameScreenshot = require('../../assets/images/game.png').default;
const settingsScreenshot = require('../../assets/images/settings.png').default;

class AboutGame extends Page {
  constructor(id: string) {
    super(id)
  }

  private howToPlayRender(paragraph: number, description: string, imageUrl: string): HTMLDivElement {
    let howToPlay = document.createElement('div');
    howToPlay.className = 'how-to-play';
    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'how-to-play__description';
    let paragraphContainer = document.createElement('div');
    paragraphContainer.className = 'how-to-play__par';
    paragraphContainer.innerText = paragraph.toString();
    let descriptionText = document.createElement('div');
    descriptionText.className = 'how-to-play__text';
    descriptionText.innerText = description;
    descriptionContainer.append(paragraphContainer, descriptionText);
    let image = document.createElement('img');
    image.src = imageUrl;
    howToPlay.append(descriptionContainer, image);
    return howToPlay;
  }

  protected createMain(text: string) {
    const mainContainer = document.createElement('main');
    let aboutHead = document.createElement('h3');
    aboutHead.className = 'about-head'
    aboutHead.innerText = 'How to play?'
    mainContainer.append(aboutHead);


    mainContainer.append(this.howToPlayRender(1, 'Register new player in game', registrationScreenshot));
    mainContainer.append(this.howToPlayRender(2, 'Configure your game settings', settingsScreenshot));
    mainContainer.append(this.howToPlayRender(3, 'Start you new game! \
        remember card positions and match it before times up', gameScreenshot));

    let newUserButton = document.createElement('button');
    newUserButton.innerText = 'New user'
    newUserButton.onclick = () => {
      let newUser = new NewUser();
      this.container.append(newUser.render());
    }
    return mainContainer;
  }

  render() {
    const header = this.createHeader('About game');
    const textAbout: string = 'The playing field consists of cards with different patterns on the back.  \
    Before the start of the game session, the player is shown the location of all paired cards, after 30 seconds they are hidden. \
    The victory is counted when all pairs of cards are found.'
    const main = this.createMain(textAbout);
    //const footer = this.createFooter('powered by my');
    this.container.append(header, main);
    return this.container;
  }
}

export default AboutGame