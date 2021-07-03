import GameSettings from "../core/GameLogic/GameSettings";
import Database from "../core/gatabase/database";
import App from "../pages/app";

class Congradulation {
  private container: HTMLElement;
  constructor(score: number) {
    this.container = document.createElement('div');
    this.container.className = 'congradulation';
    let buttonOK = document.createElement('button');
    this.container.innerText = `Great job! You scored ${score} points`;
    buttonOK.innerText = 'OK'
    buttonOK.onclick = () => {
      let modalClose = document.getElementsByClassName('congradulation');
      modalClose[0].remove();
      Database.recordScore(App.gameSettings.getCurrentPlayer(), score);
      window.location.hash = 'best-scores'
    }
    this.container.append(buttonOK);
  }

  render() {
    return this.container;
  }
}

export default Congradulation