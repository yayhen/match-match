import App from "../../pages/app";

abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeader(text: string) {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h3');
    headerTitle.innerText = text;
    header.append(headerTitle);

    const linkGame = document.createElement('a');
    linkGame.innerText = 'game';
    linkGame.href = '#game';
    if(text === 'Game') {
      linkGame.style.background = 'green';
    }
    if(App.gameSettings.getGameEnabled()) {
      header.append(linkGame);
    }
    //header.append(linkGame);

    const linkSettings = document.createElement('a');
    linkSettings.innerText = 'settings';
    linkSettings.href = '#settings';
    if(text === 'Settings') {
      linkSettings.style.background = 'green';
    }
    header.append(linkSettings);

    const linkBestScores = document.createElement('a');
    linkBestScores.innerText = 'Best scores';
    linkBestScores.href = '#best-scores';
    if(text === 'Best scores') {
      linkBestScores.style.background = 'green';
    }
    header.append(linkBestScores);

    const linkAbout = document.createElement('a');
    linkAbout.innerText = 'About';
    linkAbout.href = '#about';
    if(text === 'About game') {
      linkAbout.style.background = 'green';
    }
    header.append(linkAbout);

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