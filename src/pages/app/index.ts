import Page from '../../core/templates/page';
import BestScores from '../best-score';
import Game from '../game';
import Settings from '../settings';
import AboutGame from './../about'

class App {
  private static container: HTMLElement = document.body;
  private aboutPage: AboutGame;

  static renderNewPage(id: string) {
    App.container.innerHTML = '';
    let page: Page | null = null;

    switch (id) {
      case 'about':
        page = new AboutGame(id);
        break;
      case 'game':
        page = new Game(id);
        break;
      case 'best-scores':
        page = new BestScores(id)
        break;
      case 'settings':
        page = new Settings(id);
        break;
      default:
        page = new Game(id);
        break;
    }

    if (page) {
      const PageHTML = page.render();
      document.body.append(PageHTML);
    }
  }

  constructor() {
    this.aboutPage = new AboutGame('about');
  }

  private routeChangeHandler() {
    window.addEventListener('hashchange', () => {
      const route = window.location.hash.slice(1);
      App.renderNewPage(route);
    })
  }

  run() {
    App.renderNewPage('about');
    this.routeChangeHandler();
  }
}  
export default App