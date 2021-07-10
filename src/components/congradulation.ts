import GameSettings from '../core/GameLogic/GameSettings';
import Database from '../core/gatabase/database';
import App from '../pages/app';

class Congradulation {
  private container: HTMLElement;

  constructor(score: number) {
    this.container = document.createElement('div');
    this.container.className = 'congradulation';
    this.container.innerText = `Congradulations! You scored ${score} points`;
    const buttonOK = document.createElement('button');
    buttonOK.className = 'congradulation-button';
    buttonOK.innerText = 'OK';
    buttonOK.onclick = () => {
      const modalClose = document.getElementsByClassName('congradulation');
      modalClose[0].remove();
      Database.recordScore(App.gameSettings.getCurrentPlayer(), score);
      window.location.hash = 'best-scores';
    };
    this.container.append(buttonOK);
  }

  render() {
    return this.container;
  }
}

export default Congradulation;
