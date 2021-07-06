import NewUser from "../../components/newUser";
import App from "../../pages/app";

abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeader(text: string) {
    let header = document.createElement('header');
    let headerLogo = document.createElement('div');
    headerLogo.className = 'header-logo';
    let headerLogoUp = document.createElement('div');
    headerLogoUp.className = 'header-logo__up';
    headerLogoUp.innerText = 'MATCH';
    let headerLogoDown = document.createElement('div');
    headerLogoDown.className = 'header-logo__down';
    headerLogoDown.innerText = 'MATCH';
    headerLogo.append(headerLogoUp, headerLogoDown);
    header.append(headerLogo);

    let linksContainer = document.createElement('div');
    linksContainer.className = 'links';

    const linkSettings = document.createElement('a');
    let settingsLogo = document.createElement('div');
    settingsLogo.className = 'settings-logo';
    settingsLogo.innerHTML = '&#9881;'
    linkSettings.append(settingsLogo);
    linkSettings.append('Game Settings');
    linkSettings.href = '#settings';
    if(text === 'Settings') {
      linkSettings.style.background = 'SteelBlue';
    }
    linksContainer.append(linkSettings);

    const linkBestScores = document.createElement('a');
    let bestScoresLogo = document.createElement('div');
    bestScoresLogo.className = 'best-scores-logo';
    bestScoresLogo.innerHTML = '&#9733;'
    linkBestScores.append(bestScoresLogo);
    linkBestScores.append('Best Score');
    linkBestScores.href = '#best-scores';
    if(text === 'Best scores') {
      linkBestScores.style.background = 'SteelBlue';
    }
    linksContainer.append(linkBestScores);

    const linkAbout = document.createElement('a');
    let aboutLogo = document.createElement('div');
    aboutLogo.className = 'about-logo';
    aboutLogo.innerHTML = '?';
    linkAbout.append(aboutLogo, 'About Game');
    linkAbout.href = '#about';
    if(text === 'About game') {
      linkAbout.style.background = 'SteelBlue';
    }
    linksContainer.append(linkAbout);

    header.append(linksContainer);
    
    let newUserButton = document.createElement('button');
    newUserButton.className = 'new-user-button';
    newUserButton.innerText = 'REGISTER NEW PLAYER'
    newUserButton.onclick = () => {
      let newUser = new NewUser();
      this.container.append(newUser.render());
    }

    let startStopGameButton = document.createElement('button');
    startStopGameButton.className = 'start-stop-game';
    if(window.location.hash === '#game') {
      startStopGameButton.innerText = 'STOP GAME';
    } else {
      startStopGameButton.innerText = 'START GAME';
    }
    startStopGameButton.onclick = () => {
      if(window.location.hash === '#game') {
        window.location.hash = '#about';
      } else {
        window.location.hash = '#game';
      }
    }

    if(App.gameSettings.getGameEnabled()) {
      header.append(startStopGameButton);
    } else {
      header.append(newUserButton);
    }

    return header;
  }

  protected createMain(text: string) {
    const mainText = document.createElement('main');
    mainText.innerText = text;
    return mainText;
  }

  protected createFooter(text: string) {
    const footerText = document.createElement('footer');
    footerText.innerText = text;
    return footerText;
  }

  render() {
    return this.container;
  }
}

export default Page